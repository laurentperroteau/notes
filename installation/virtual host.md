Virtual host
============

> pour environnement LAMP

Lien symboliques :
------------------

* `sudo ln -s /home/laurent/www/ve/web/equateur-voyage /var/www/equateur.voyage`


Emplacement fichier conf Apache :
---------------------------------

* `sudo nano /etc/apache2/sites-available/000-default.conf`
* ou 
* `sudo nano /etc/apache2/sites-available/default`

VirtualHost :
-------------

````
<VirtualHost *:80>
    ServerName blog.local
    ServerAlias www.blog.local
    DocumentRoot /var/www/blog

    <Directory "/var/www/blog">
        Options -Indexes -MultiViews +FollowSymLinks
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
````

Appliquer changement :
======================

* `sudo service apache2 restart`


### (opt) Fichier de conf dans le home :

* `sudo nano coral.conf` (depuis /home/laurentperroteau/www/installation/coral.conf)
* `sudo a2ensite coral.conf`
* `sudo service apache2 restart`

