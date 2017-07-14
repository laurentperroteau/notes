Installer certificat SSL local
==============================

> https://technique.arscenic.org/lamp-linux-apache-mysql-php/apache-le-serveur-http/modules-complementaires/article/installer-et-configurer-le-module-ssl-pour-apache

* hostname: lp.local
* `sudo /usr/sbin/make-ssl-cert /usr/share/ssl-cert/ssleay.cnf /etc/ssl/certs/wildcard_laurentperroteau.local.pem`
* `openssl req -new -x509 -days 365 -nodes -out /etc/ssl/certs/wildcard_laurentperroteau.local.pem -keyout /etc/ssl/private/wildcard_laurentperroteau.local.key`
* renseigner info FR, france, lyon, dev, etc…
