Linux Terminal
==============

Configuration :
---------------

* "extension" terminal couleur, support git etc … : https://github.com/Bash-it/bash-it 

Droîts :
--------

* voir chmod number : `stat --format '%a' <file>`
* chmod récursif sur les répertoires uniquement : `find . -type d -exec chmod 755 {} \;`
* même chose pour les fichiers: `find . -type f -exec chmod 644 {} \;`
* changer user : `sudo chown -R nouveau_user nom_repertoire`
* changer groupe dossier (sans le R pour un fichier) : `sudo chown laurent:laurent -R nouveau_repertoire`

Ouverture GUI depuis terminal :
-------------------------------

* ouvrir fichier: `gnome-open` dans programe
* ouvrir dossier dans fenêtre: `xdg-open`

Manipulation fichiers :
--------------------------------

* accès disque externe : `cd /media/laurentperroteau/My Book/`
* trouver le fichier le plus récent : `ls -Art | tail -n 1`
* trouver le plus vieux fichier : `find -type f -printf '%T+ %p\n' | sort | head -n 1`

### Manipulation fichiers en masse :

* supprimer tout les fichier ayant l’extension .CR2 : `find . -name '*.CR2' -type f -delete`
* copier les fichiers ayant un poid supérieur à tant (ex 4.2go) :
  * `$ find . -size +4000M -exec cp -r {} cheminOuCopier/ \;` (se placer dans le dossier qui contient les fichiers à copier)
* récupérer une liste de fichier : `ls > out.txt`
* copier une liste de fichiers à partir d'une liste : `xargs -a list.txt mv -t /path/folder/where/copy`
* supprimer une liste de fichier à partir d'une liste : `$ xargs rm < list.txt`
* copier tous les fichier modifié les 60 dernièrs jours : `find . -mtime -60 -print0 | cpio -0mdp ../dossier_destination

Divers :
--------

* chercher un fichier: `locate`
* eliminer les fichiers "recent files" : `cat /dev/null > .local/share/recently-used.xbel`

Ça bug !!! :
------

* rédémarrer : `sudo reboot`
* démarrer le mode GUI :
  * (opt) `rm .Xautority`
  * `startx`
* kill process (exemple avec nemo) : 
   * `ps aux | grep nemo`
   * result :
     * `laurent   2578 16.5 61.6 6263168 5023192 tty1  Sl   mai08 557:05 nemo -n`
     * `laurent  22791  0.0  0.0  13640   968 pts/0    S+   19:28   0:00 grep --colour=auto nemo`
  * `kill 2578`
  * done
