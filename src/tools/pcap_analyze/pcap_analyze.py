import dpkt
import socket
import requests
import json
import socket
import sys

from scapy.all import *
from binascii import unhexlify, hexlify
from termcolor import colored, cprint


network_stream = []
final_stream = []
all_ip = []
unique_ip = []

main_ip = '192.168.219.100'


#get the information about the extension of a file
def get_extensions(header):
    headers = [{'HEADER': 'd0cf', 'EXTENSION': 'doc'},
              {'HEADER': '4d5a', 'EXTENSION': 'exe'},
              {'HEADER': '504b0304', 'EXTENSION': 'zip'},
              {'HEADER': '504b0506', 'EXTENSION': 'zip'}]
    
    for i in headers:
        if str(header).strip() == str(i['HEADER']).strip():
            return i['EXTENSION']
    return "unknown"


def parse_pcap(packet_list):
    sessions = []

    #walk through the packets from the pcap
    for i in packet_list:
        if not sessions:
            #create the packet list to push into the packet dictionary
            packets = []
            packets.append(i)
            packet = {
                'IP1': i['IP'].src,
                'IP2': i['IP'].dst, 
                'PORT1' : i['TCP'].sport, 
                'PORT2': i['TCP'].dport, 
                'PACKETS': packets, 
                'CONVO_SIZE': i['IP'].len} 
            sessions.append(packet)
            continue
        else:
            found = False
            for session in sessions:
                if i['IP'].src in session.values() and i['IP'].dst in session.values() and i['TCP'].sport in session.values() and i['TCP'].dport in session.values():
                    session['PACKETS'].append(i)
                    session['CONVO_SIZE'] = session['CONVO_SIZE'] + i['IP'].len
                    found = True

            if not found:
                packets = []
                packets.append(i)
                packet = {'IP1': i['IP'].src, 'IP2': i['IP'].dst, 'PORT1' : i['TCP'].sport, 'PORT2': i['TCP'].dport, 'PACKETS': packets, 'CONVO_SIZE': i['IP'].len}
                sessions.append(packet)
    return sessions


def parse_sessions(sessions):
   count = 1
   for i in sessions:
      ip1_len = 0
      ip2_len = 0
      ip1_session = ''
      ip2_session = ''
      for j in i['PACKETS']:
         #finds the length of one side of the session
         if j['IP'].src == i['IP1']:
            ip1_len += j['IP'].len
            try:
               #saves the hex for pushing into a file
               ip1_session +=  unhexlify(j['TCP'].load).encode('hex_codec')
            except:
               continue
         #finds the length of the other side of the session
         elif j['IP'].src == i['IP2']:
            ip2_len += j['IP'].len
            try:
               #saves hex for pushing into file.
               ip2_session += unhexlify(j['TCP'].load.encode('hex_codec'))
            except:
               continue

      #this if...elif...else state ment is for trying to figure out what side the session transfered files..  It is based soley on size. Once it finds that it will attempt to
      #write the file to disk, then transfer the process over to the get_extensions function.
      #should try testing this with text files, right now ive only done it with binary.
      if ip1_len > ip2_len:
         ip1_session_encoded = ip1_session.encode()
         header = hexlify(ip1_session_encoded[:2])
         extension = get_extensions(header)
         print("%s seems to be the one with the transfer" %i['IP1'])
         file = open('file%s.%s' % (count, extension), 'wb')
         file.write(ip1_session_encoded)
         file.close()
         print(" Your file was saved as 'test%s.%s'.\n If it has an extension of unkown, add the file header and document type to the get_extensions function." % (count, extension))
      elif ip1_len < ip2_len:
         ip2_session_encoded = ip2_session.encode()
         header = hexlify(ip2_session_encoded[:2])
         extension = get_extensions(header)
         file = open('file%s.%s' % (count, extension), 'wb')
         print("%s seems to be the one with the transfer" %i['IP2'])
         file.write(ip2_session_encoded)
         file.close()
         print(" Your file was saved as 'test%s.%s'.\n If it has an extension of unkown, add the file header and document type to the get_extensions function." % (count, extension))
      else:
         print('No file')
      count +=1


def printPcap(pcap):
    for (ts, buf) in pcap:
        try:
            eth = dpkt.ethernet.Ethernet(buf)
            ip = eth.data
            #read the source IP in src
            src = socket.inet_ntoa(ip.src)
            #read the destination IP in dst
            dst = socket.inet_ntoa(ip.dst)

            network_stream.append(f'{src}  -->  {dst}')
            all_ip.append(src)
            all_ip.append(dst)
            src_response = requests.get(f'https://ipapi.co/{src}/json/').json()
            dst_response = requests.get(f'https://ipapi.co/{dst}/json/').json()

            src_location_data = {
                "country": src_response.get("country_name")
            }
            dst_location_data = {
                "country": dst_response.get("country_name")
            }

            network_stream.append(f'Source country: {src_location_data}  Destination country: {dst_location_data}\n')

        except:
            pass


f = open('test.pcap', 'rb')
pcap = dpkt.pcap.Reader(f)

printPcap(pcap)

[final_stream.append(x) for x in network_stream if x not in final_stream]
[unique_ip.append(x) for x in all_ip if x not in unique_ip]


def check_ip(ip_address):
    results = []
    url = f'https://www.virustotal.com/api/v3/ip_addresses/{ip_address}'
    header = {'X-Apikey': 'e4f36c9c96fc2e5ce4fbb43c575c28a210132b20e660b97268155467ad4d466d'}
    response = requests.get(url, headers = header)
    result = response.json()
    if result.get('data').get('attributes'):
        benign_result = result.get('data').get('attributes').get('last_analysis_stats').get('harmless') 
        malicious_result = result.get('data').get('attributes').get('last_analysis_stats').get('suspicious')
        results.append(f'Bening: {benign_result}')
        results.append(f'Malicious: {malicious_result}')
    return results


for i in final_stream:
    print(i)

print('\n================================================================')
print('The lits of all unique IP addresses and it\'s analyzis')
print('================================================================\n')

for i in unique_ip:
    ip = colored(i, 'blue')
    print(ip)
    print(check_ip(i))
    print('')
    

test = rdpcap('test.pcap')
sessions = parse_pcap(test)
count = 1

for i in sessions:
      print("session number %s" %count)
      print("Session size %s" %i['CONVO_SIZE'])
      print("Partners %s, %s" %(i['IP1'], i['IP2']))
      count +=1

parse_sessions(sessions)
