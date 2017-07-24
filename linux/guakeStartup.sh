#!/bin/bash

# /usr/bin/guake &
# sleep 5 let main guake process start and initialize D-Bus session

# adjust tab which was opened by default
# guake --rename-tab="IHM" --execute="/usr/bin/iotop"

# !!! Rename tab doesn't work !!!

guake --new-tab --execute="/usr/bin/bash"
guake --execute="cd git/IHM && npm start" --rename-current-tab="IHM"

guake --new-tab --execute="/usr/bin/bash"
guake --execute="cd git/IHM" --rename-current-tab="Git IHM"

guake --new-tab --execute="/usr/bin/bash"
guake --execute="cd git/FO && git up"
guake --rename-current-tab="Git middle"

guake --new-tab --execute="/usr/bin/bash"
guake --execute="google-chrome" --rename-current-tab="Chrome"

sleep 30

guake --new-tab --execute="/usr/bin/bash"
guake --execute="sh Documents/WebStorm-171.4249.40/bin/webstorm.sh" --rename-current-tab="Webstorm"
