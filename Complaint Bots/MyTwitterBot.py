from twython import Twython, TwythonError
import time

APP_KEY = 'DAgXLbgJ1RyTzs5PJmcAl3C5r'
APP_SECRET = '8fslk1UsUJ3hWwlVxutZZn8WANs8xLWqVZVnfK0Op6Coai7cz3'
OAUTH_TOKEN = '4428299482-hPWKz0LJsz2CqD5ka6eybLWCzknm01pNq5moVHq'
OAUTH_TOKEN_SECRET = '0w5vHMI0M37agySI2HSNS8g1PZemud6E8b5e8SmnxeYra'

twitter = Twython(APP_KEY, APP_SECRET, OAUTH_TOKEN, OAUTH_TOKEN_SECRET)

try:
	with open('ok.txt', 'r+') as tweetfile:
		buff = tweetfile.readlines()

	for line in buff[:]:
		line = line.strip(r'\n') #Strips any empty line.
		if len(line)<=140 and len(line)>0:
			print ("Tweeting...")
			twitter.update_status(status=line)
			with open ('ok.txt', 'w') as tweetfile:
				buff.remove(line) #Removes the tweeted line.
				tweetfile.writelines(buff)
			time.sleep(900)
		else:
			with open ('ok.txt', 'w') as tweetfile:
				buff.remove(line) #Removes the line that has more than 140 characters.
				tweetfile.writelines(buff)
			print ("Skipped line - Char length violation")
			continue
	print ("No more lines to tweet...") #When you see this... Well :) Go find some new tweets...
except TwythonError as e:
	print (e)