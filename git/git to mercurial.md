
GIT to Mercurial
================

Significant differences:
-------------------------

1. Local and repo are the same (like SVN), no need synchronized local and origin
2. No staging area (index) by default: use --interactive (o better with IDE)

Helps and config:
-----------------

* ```` $ hg help nomCommande````
* config :
  * nano ~/.```` $ hgrc````
````
[ui]
username = John Doe <john@example.com>
````

Equivalent commands:
--------------------
* log : ```` $ hg log --limit 3 -G````
* (a tester) files changed : ```` $ hg status --rev 40:39````
* commit : 
  * add (optionel puisque automatiquement ajouté) : ```` $ hg add````
  * IDE pour commit multiple (se placer sur dossier parent)
  * supprimer commit : ```` $ hg strip revNumber````
* rebase :
  * placer les commits dans l'ordre de création : ```` $ hg rebase --base 27 --dest 28````
* branches :
  * voir list : ```` $ hg branches````
  * voir courante : ```` $ hg branch````
  * créer : ```` $ hg branch nomBranch````
  * l’ajouter (n’existe pas avant) : ```` $ hg commit````
  * changer : ```` $ hg up nomBranch````
* merge : 
  * ```` $ hg merge nomBranch````
  * abort : ```` $ hg update -C .```` 
* conflit : 
  * ```` $ hg resolve -m fichier.html````
  * accept ours : ```` $ hg resolve -t internal:local file.html````
  * accept theirs : ```` $ hg resolve -t internal:other file.html````
  * ```` $ hg commit````
  * le fichier .orig reste présent ?
  * (a tester) --no-backup pour ne pas les garder
  * (a tester) abandonner merge : ```` $ hg update -C .````
* revert last commit : ```` $ hg strip --rev .````
* ignore files : 
  * .```` $ hgignore (seulement à la racine)````
* Bonus :
  * show commits not pushed : ```` $ hg out````
