import numpy as np
import pandas as pd
import requests
import json


# url = "https://api.covid19api.com/summary"
# JSONContent = requests.get(url).json()
# content = json.dumps(JSONContent, indent = 4, sort_keys=True)
# keys = JSONContent.keys()
# print(keys)
# print(type(JSONContent['Countries']))
# df = pd.DataFrame(JSONContent['Countries'])
# print(df)
# df.to_csv('test.csv')

url = "https://amazon-web-scrapper1.p.rapidapi.com/search/macbook%20air"

querystring = {"api_key":"32df47294e867894f92dcd6d71f0f58f"}

headers = {
    'x-rapidapi-host': "amazon-web-scrapper1.p.rapidapi.com",
    'x-rapidapi-key': "679c3866c7mshe8861ddb23e1c74p1a6a42jsn8ba39c7f42a8"
    }

response = requests.request("GET", url, headers=headers, params=querystring).json()
# print(response.text)
content = json.dumps(response, indent = 4, sort_keys=True)
print(content)
# keys = response.keys()
# print(keys)
# print(response['name'])
# print(type(response['name']))
df = pd.DataFrame((response['results']))
print(df)
df.to_csv('test.csv')
