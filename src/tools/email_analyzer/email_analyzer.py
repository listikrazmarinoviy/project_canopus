import re
import requests


content = open('example.eml', 'r')
content_copy = open('example.eml', 'r')
as_string = content_copy.read()
lines = content.readlines()

ip_pattern = re.compile(r'(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})')


#====================================================================================
#variables
#====================================================================================

receiver = ""
sender = ""
received_from = ""
date = ""
content_type = ""
ip_list = []
ip_results = []

#====================================================================================
#functions
#====================================================================================

#function to find all urls in text
def find_url(string):
    regex = r"(?i)\b((?:https?://|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))"
    url = re.findall(regex, string)
    return [x[0] for x in url]

#extract ip addresses from text
def extract_ip(text):
    for line in text:
        match = ip_pattern.search(line)
        if match is not None:
            ip_list.append(match[0])

#check whether ip addresses are malicious or not
def check_ip(ip_addresses_list):

    for i in ip_addresses_list:
        url = f'https://www.virustotal.com/api/v3/ip_addresses/{i}'
        header = {'X-Apikey': 'e4f36c9c96fc2e5ce4fbb43c575c28a210132b20e660b97268155467ad4d466d'}
        response = requests.get(url, headers = header)
        result = response.json()
        if result.get('data').get('attributes'):
            benign_result = result.get('data').get('attributes').get('last_analysis_stats').get('harmless') 
            malicious_result = result.get('data').get('attributes').get('last_analysis_stats').get('suspicious')
            #ip_results.append(f'Bening: {benign_result}')
            ip_results.append(f'Malicious: {malicious_result}')


#====================================================================================
#main functionality
#====================================================================================


for line in lines:
    if "Delivered-To:" in line:
        receiver = line
    elif "From:" in line:
        sender = line
    elif "Received:" in line:
        received_from = line
    elif "Date:" in line:
        date = line
    elif "Content-Type:" in line:
        content_type = line

extract_ip(lines)

#remove duplicates
ip_list = list(set(ip_list))

#check whether ips are malicious or not
check_ip(ip_list)

links = find_url(as_string)
    

print(receiver)
print(sender)
print(received_from)
print(date)
print(content_type)

print('All URL\'s in email: ')
for i in links:
    print(i)

print('\nAll IP addresses in email: ')
for i in ip_list:
    print(i)

print('\nThe result of IP addresses\' scan: ')
counter = 0
for i in ip_results:
    print('{}  ==>  {}'.format(ip_list[counter], i))
    counter = counter + 1
