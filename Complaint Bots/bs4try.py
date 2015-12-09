from bs4 import BeautifulSoup
import urllib
import json

url='http://att.pissedconsumer.com/'
data= urllib.urlopen(url).read()
soup=BeautifulSoup(data)
barters=[]

links=soup.find_all("div",class_="review-content")
places=soup.select('span.pnr')
#print links

for link in links:
	print link.div.p
	# f=open("test.txt","w")
	# f.write(link)
	# f.close()

# for place in places:
	
# 	for link in links:
# 		text=link.text.lower()
# 		if " for "  in text:
# 			items=text.split(" for ")
# 			barter={'item1':items[0],'item2':items[1],'url': link.get('href')}
# 			barters.append(barter)
# 		#print items[0] + "--->" + items[1]

# with open('items.json','w') as f:
# 	json.dump(barters,f)
