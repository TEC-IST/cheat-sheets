Debian fresh installs don't add user to sudoers automatically.  Use (replacing ${} with unquoted value):
---
su
${root password}
apt-get install sudo -y #sudo might not be installed in minimal install
sudo adduser ${username} sudo
exit
---
You may need to exit the terminal window or reboot for the change to be applied.  Check with:
---
groups ${username}
---
