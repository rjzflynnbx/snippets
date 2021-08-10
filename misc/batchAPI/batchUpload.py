# https://developer.boxever.com/reference/overview_batch
# https://developer.boxever.com/reference/importing-the-batch-file
# order data model: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/sitecore-cdp-order-data-model-for-batch-api.html
# Script takes a file, client key and api secret.Name your JSON file outputFile.json, and compress into outputFile.json.gz
# one JSON record per line, see docs for full details on fomatting

import csv
import json
import uuid
import codecs
import sys
import gzip
import base64
import hashlib
import os
import requests
import logging

fileName = sys.argv[1]
clientKey = sys.argv[2]
apiToken = sys.argv[3]
endpoint="https://api.boxever.com/v2/batches"
uuid = str(uuid.uuid4())

### Get the MD5 Checksum of the GZipped JSON file
print("Getting the MD5 Checksum of the GZipped JSON file")
def file_as_bytes(file):
    with file:
        return file.read()
md5=hashlib.md5(file_as_bytes(open('outputFile.json.gz', 'rb'))).hexdigest()

### Get the size of the file
print("Getting the size of the file")
size = os.path.getsize('outputFile.json.gz')

### Create and send a Request for an upload URL
print("Sending Request for an upload URL")
req={'checksum': md5, 'size': str(size)}
headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}
response = requests.put(endpoint + "/" + uuid, auth=(clientKey, apiToken), headers=headers, json=req)

### Retrieve the upload URL from the Response
print("Getting the upload URL from the response")
data = json.loads(response.text)
location = data['location']
uploadUrl = location['href']

### Create and send a Request to upload the GZipped JSON file to the upload URL
print("Uploading the GZipped JSON file to the upload URL")
b64md5 = base64.b64encode(bytearray.fromhex(md5))
headers = {'x-amz-server-side-encryption': 'AES256', 'Content-Md5': b64md5}
file_data = open('outputFile.json.gz', 'rb').read()
response = requests.put(uploadUrl, headers=headers, data=file_data)

### Delete the GZipped JSON file
print("Deleting the GZipped JSON file")
os.remove("outputFile.json.gz")

print("\nFILE UPLOADED SUCCESSFULLY\n")
### Generate a URL that can be used to get the status of this upload
print("Use this URL in PostMan (or similar) to retrieve the status of this upload: https://api.boxever.com/v2/batches/" + uuid )