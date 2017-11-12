Apache/PHP :
------------

* `sudo apt-get install apache2-mpm-itk libapache2-mod-php5 php5-cli`
* `sudo a2enmod rewrite`
* `sudo php5enmod pdo_mysql`

### PHP 7 Ubuntu :

Suivre [ce tuto](https://www.howtoforge.com/tutorial/install-apache-with-php-and-mysql-on-ubuntu-16-04-lamp/), sauf :

* test url http://locahost et non http://192.168.1.100
* je n'ai pas installé mariadb, ssl
* avant d'installer php 7
  * `apt-add-repository ppa:ondrej/php`
  * `apt-get update`
* fix pour [connecter à phpmyadmin sans password](https://www.liquidweb.com/kb/error-login-without-a-password-is-forbidden-by-configuration-see-allownopassword-solved/)  
* attention à ne pas sauter l'étape "9.1 Root access to PHPMyAdmin with MariaDB" (en modifiant le password, en local admin/1234)

Bonus :

* `sudo apt install composer`

  


Divers :
--------
* https://github.com/Bash-it/bash-it/wiki/Themes => bakke
* composer : http://www.bravo-kernel.com/2014/08/how-to-install-composer-on-debian/
* `sudo apt-get install guake`
* node.js : https://nodejs.org/en/download/package-manager/ 
