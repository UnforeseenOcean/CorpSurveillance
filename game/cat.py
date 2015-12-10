import sys

filename=sys.argv[1]
search=sys.argv[2]
replace=sys.argv[3]

lines = open(filename,'r').readlines()

for line in lines:
		line = line.strip()
		if search in line:
			line = line.replace(search,replace)
			print line