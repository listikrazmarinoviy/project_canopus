import base64
import urllib.parse
import hashlib
import rsa


def to_hex():
    value = input('Enter text: ')
    string = value.encode('utf-8')
    hex_value = string.hex()
    return hex_value

def from_hex():
    value = input('Enter hex: ')
    text = bytes.fromhex(value).decode('utf-8')
    return text

def to_binary():
    value = input('Enter text: ')
    bin_a = ''.join(format(ord(i), '08b') for i in value)
    return bin_a

def from_binary():
    value = input('Enter binary value: ')
    in_string = chr(int(value[:8], 2))
    return in_string

#==============================================================================
#base** encoding and decoding
#==============================================================================

def to_base32():
    value = input("Enter text: ")
    base32_str = base64.b32encode(bytearray(value, 'ascii')).decode('utf-8')
    return base32_str

def from_base32():
    value = input("Enter base-32 value: ")
    text = base64.b32decode(value).decode('utf-8')
    return text

def to_base64():
    value = input("Enter text: ")
    value_bytes = value.encode('ascii')
    base64_bytes = base64.b64encode(value_bytes)
    base64_message = base64_bytes.decode('ascii')
    return base64_message

def from_base64():
    value = input("Enter base64 value: ")
    base64_bytes = value.encode('ascii')
    message_bytes = base64.b64decode(base64_bytes)
    message = message_bytes.decode('ascii')
    return message

def to_base85():
    value = input("Enter text: ")
    value_bytes = value.encode('ascii')
    base85_bytes = base64.b85encode(value_bytes)
    base85_message = base85_bytes.decode('ascii')
    return base85_message

def from_base85():
    value = input("Enter base85 value: ")
    base85_bytes = value.encode('ascii')
    message_bytes = base64.b85decode(base85_bytes)
    message = message_bytes.decode('ascii')
    return message

#==============================================================================

def url_encode():
    value = input("Enter text: ")
    url_encoded = urllib.parse.quote(value)
    return url_encoded

def url_decode():
    value = input("Enter decoded url: ")
    url_decoded = urllib.parse.unquote(value)
    return url_decoded

#==============================================================================

#def aes_encrypt(value, password):
#    pad = lambda s: s + (16 - len(s) % 16)
#    private_key = hashlib.sha256(password.encode("utf-8")).digest()
#    value = pad(value)
#    iv = Random.new().read(AES.block_size)
#    cipher = AES.new(private_key, AES.MODE_CBC, iv)
#    return base64.b64encode(iv + cipher.encrypt(value))

def generateKeys():
    (publicKey, privateKey) = rsa.newkeys(1024)
    with open('publicKey.pem', 'wb') as p:
        p.write(publicKey.save_pkcs1('PEM'))
    with open('privateKey.pem', 'wb') as p:
        p.write(privateKey.save_pkcs1('PEM'))

def loadKeys():
    with open('publicKey.pem', 'rb') as p:
        publicKey = rsa.PublicKey.load_pkcs1(p.read())
    with open('privateKey.pem', 'rb') as p:
        privateKey = rsa.PrivateKey.load_pkcs1(p.read())
    return privateKey, publicKey

def encrypt(message, publicKey):
    return rsa.encrypt(message.encode(), publicKey)

def decrypt(encMessage, privateKey):
    return rsa.decrypt(encMessage, privateKey).decode()
    
   
#==============================================================================
# hashing
#==============================================================================

def generate_md5(text):
    return hashlib.md5(text.encode('utf-8')).hexdigest()

def generate_sha1(text):
    encoded_str = str.encode('utf-8')
    hash_obj = hashlib.sha1(encoded_str)
    hex_value = hash_obj.hexdigest()
    return hex_value

def generate_sha256(text):
    encoded_str = str.encode('utf-8')
    hash_obj = hashlib.sha256(encoded_str)
    hex_value = hash_obj.hexdigest()
    return hex_value

def generate_sha512(text):
    encoded_str = str.encode('utf-8')
    hash_obj = hashlib.sha512(encoded_str)
    hex_value = hash_obj.hexdigest()
    return hex_value


value = input("Enter text: ")
print(generate_sha1(value))
print(generate_sha256(value))
print(generate_sha512(value)) 
