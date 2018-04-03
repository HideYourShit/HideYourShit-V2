on run argv
	set vpnservice to item 1 of argv
	tell application "System Events"
		tell current location of network preferences
			set Actives to get name of every service
		end tell
	end tell
	if vpnservice is in Actives then
		tell application "System Events"
			tell current location of network preferences
				try
					set myConnection to the service vpnservice
				end try
				if current configuration of myConnection is not connected then
					connect myConnection
				end if
			end tell
		end tell
	end if

end run
