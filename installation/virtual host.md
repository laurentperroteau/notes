Virtual host
============

> pour environnement LAMP


### Emplacement fichier conf Apache :

* `sudo nano /etc/apache2/sites-available/000-default.conf`
* ou 
* `sudo nano /etc/apache2/sites-available/default`

### Ajouter le host :

* `sudo nano /etc/hosts`

### VirtualHost :

````
<VirtualHost *:80>
    ServerName coucou.local
    ServerAlias www.coucou.local
    DocumentRoot /var/www/coucou

    <Directory "/var/www/coucou">
        Options -Indexes -MultiViews +FollowSymLinks
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
````

### Dossier dans local et lien symbolique

* `mkdir cd ~/www/coucou` (ajouter index.html)
* `sudo ln -s /home/laurentperroteau/www/coucou /var/www/coucou`

### Appliquer changement :

* `sudo /etc/init.d/apache2 restart`

ou 

* `sudo systemctl restart apache2`

ou

* `sudo service apache2 restart`

#### TODO :

* voir déplacer les fichiers de conf dans `/home` avec un lien symbolique

#### (opt) Fichier de conf dans le home :

* `sudo nano coral.conf` (depuis /home/laurentperroteau/www/installation/coral.conf)
* `sudo a2ensite coral.conf`
* `sudo service apache2 restart`

