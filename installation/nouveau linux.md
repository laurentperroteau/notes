Après installation d'un nouveau Linux :
=======================================

* Numix : http://omgfoss.com/install-numix-theme-icons-ubuntu-18-04/
* `sudo apt-get install guake`
* Tweak
* node.js : https://nodejs.org/en/download/package-manager/ 
* [changer background login ubuntu](http://ubuntuhandbook.org/index.php/2017/10/change-login-screen-background-ubuntu-17-10/)
* logiciel photo : https://doc.ubuntu-fr.org/gthumb
* alt+tab: https://askubuntu.com/questions/1036248/how-to-separate-opened-windows-in-alttab-switcher-in-ubuntu-18-04
* Stacer (gui pour faire entre autre de la place): https://oguzhaninan.github.io/Stacer-Web/
* sudo apt install flameshot et changer raccourci impression écran : https://askubuntu.com/questions/1036473/ubuntu-18-how-to-change-screenshot-application-to-flameshot
* TO TEST : https://askubuntu.com/questions/128474/how-to-customize-on-screen-notifications
* Alias bash :
  * dans ~/.bashrc
````
# Alias maison
alias g="git"
alias n="npm"
````

Problèmes :
-----------
* plex external drive: https://askubuntu.com/questions/395291/plex-media-server-wont-find-media-external-hard-drive

PHP 7 Ubuntu :
--------------

Suivre [ce tuto](https://www.howtoforge.com/tutorial/install-apache-with-php-and-mysql-on-ubuntu-18-04-lamp/), sauf :

* test url http://locahost et non http://192.168.1.100
* je n'ai pas installé ssl
* problème mysql root accès : https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost
* avant d'installer php 7
  * `apt-add-repository ppa:ondrej/php`
  * `apt-get update`
* fix pour [connecter à phpmyadmin sans password](https://www.liquidweb.com/kb/error-login-without-a-password-is-forbidden-by-configuration-see-allownopassword-solved/)  
* __Attention__ :
  * à ne pas sauter l'étape "9.1 Root access to PHPMyAdmin with MariaDB" (en modifiant le password, en local admin/1234)
  * les extensions s'installent en faisant un `apt-get install`, c'est tout ! Pas en activant les .dll dans `php.ini` comme sur Windows
  * j'ai accidentelement installer php cli 7.0 et 7.1, le dernier ayant été activé. Pour remettre le 7.0, j'ai supprimer le lien symbolique : 
    * ` /usr/bin/php` et créer un nouveau qui pointe sur php7.0 `sudo ln -s /usr/bin/php7.0 /usr/bin/php`
    * ou 
    * ` /etc/alternatives/php` => `sudo ln -s /usr/bin/php7.0 /usr/bin/php`

Bonus :

* `sudo apt install composer`
