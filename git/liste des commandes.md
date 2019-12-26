![Git](http://git-scm.com/images/logo@2x.png)

Lexique :
---------
* HEAD : la référence à la révision courante (généralement le dernier commit)
* untracked : pas encore versionné
* unmodified : versionné mais pas modifié
* modified : ayant des modifications pas encore ajoutées au repo local
* staged : sur le repo local
* fast-forward (ou ff) : [explication](http://tech.m6web.fr/tentative-d-explication-des-fast-forward-sous-git)


Catastrophe, j'ai tout perdu : 
------------------------------

A moins de ne pas avoir poussé sur un repo distant et d'avoir supprimer le dossier ````.git````, il est théoriquement impossible de perdre quelques choses avec Git : 

1. ````$ git reflog```` pour voir les dernières actions exécutées (numérotées)
2. ````$ git reset 'HEAD@{1}'```` pour revenir au HEAD a l'état précédent la catastrophe
3. Le HEAD est maintenant à l'endroit voulu mais les fichiers en local sont toujours ceux précédent la catastrophe, donc il faut les annuler en faisant ```$ git checkout nomBrancheCourante``` 


Repo local :
------------

Voir quels fichiers sont "untracked" et "modified"
    
````$ git status````

---

Ajouter un fichier "untracked"/"modified"
    
````$ git add fileName````

---

Ajouter toutes les fichiers "untracked"/"modified"
    
````$ git add .````

---

Faire un diff d'un fichier "modifier"
    
````$ git diff fileName````

---

Faire un diff d'un fichier "staged"
    
````$ git diff --cached/staged file.html ````

---

Commiter les fichiers "staged"
    
````$ git commit -m “Message du commit” ````

ou

````$ git commit ```` (l'éditeur de la console s'ouvre)

---

Ajouter au dernier commit un changement oublié

````$ git commit --amend````

---

Modifier le message du dernier commit

````$ git commit --amend -m "new message" ````

---

Voir liste des commits
    
````$ git log --pretty=oneline````

---

Rechercher un commit ayant dans le message du commit "hello"
    
````$ git log --grep=hello````

---


Ajouter toutes les modifications/suppression pas encore "staged" : 

_ex : j'ai supprimé beaucoup de fichier à la main sans passer par GIT et c'est un peu long de les ajouter un par un_
    
````$ git add -u````


Renommer / supprimer / faire un revert (local) :
------------------------------------------------

Tester le projet a un commit antérieur (et ensuite annuler le test)
    
````$ git checkout numeroDuCommit````

````$ git checkout master```` 

---

Renommer/déplacer un fichier
    
````$ git mv path/file.html````

---

Suppression d'un fichier
    
````$ git rm file.html````

---

Suppression d'un fichier "staged"
    
````$ git rm --cached/staged file.html ````

---

Revert d'un fichier "modified" (suppression des modifications depuis dernier commit)
    
````$ git checkout fileName````

---

Revert d'un fichier "staged" (suppression des modifications depuis dernier commit)
    
````$ git reset HEAD fileName````

---

Revert tous les fichiers staged (attention, les changements non-commité seront perdus)
    
````$ git reset --hard HEAD````

---

Reset/Supprimer le où les derniers commit en local

````$ git reset --hard HEAD~1```` 

---

Reset/Supprimer un ou des commit en revenant sur le dernier "bon" commit en local

````$ git reset 6f473b7````

---

Appliquer le reset/suppression au répo distant

````git push origin +HEAD````

---

Revert d'un commit spécifique (supprime les changements effectusé lors d'un commit)

````$ git revert 6f473b7````

---


Repo distant :
--------------

Récupérer changement depuis repo disant
    
````$ git fetch origin / $ git fetch --all````

---

Merger les changement précédemment récupérés (de master)
    
````$ git merge origin/master````

---

Exécuter les 2 précédentes actions à la fois 
    
````$ git pull````

---

Après un fetch, merger les changements du repo distant sans prendre en compte les modifications locales
    
````$ git reset --hard origin/master````

---

Pousser les fichiers "staged" sur repo distant
    
````$ git push origin master```` (ou nom de la branche)


Branches :
----------

Lister les branches et voir celle courante (passer ````-a```` pour celles du repo distant)
    
````$ git branch````

---

Changer de branche
    
````$ git checkout nomBranche````

---

Copier une branche d'un repo distant

````$ git checkout -b nomBranche origin/nomBranche```` (récupère la branche distante toute en créant une branche locale du même nom, puis se positionne sur cette dernière)

---

Crée une branche depuis n commit antérieur (ex: j'ai oublié de créer une nouvelle branche, j'étais sur master)

````$ git branch newbranch```` (ne fonctionne pas avec une branche existante, il faut en créer une nouvelle)

````$ git reset --hard HEAD~3```` (changer 3 par la quantité de commit)

````$ git checkout newbranch````

---

Savoir si une branche n'a pas encore été merger (ou pas encore mergé sur master)  :
    
````$ git branch --no-merged````

````$ git branch --no-merged master````

---

Supprimer une branch en local
    
````$ git branch -d nomBranche````

---

Supprimer une branch distante 

Utiliser GitLab de préférence ou (````$ git push origin :nomBranche````)

---

Lister les branches par ordre chronologique de son dernier commit (plus récente en premier)
    
````$ git for-each-ref --sort=-committerdate refs/heads````


Merge :
-------

Merger une branche (se positionner sur la branche sur laquelle on souhaite merger et s'assurer que les branches soient à jour) :
    
````$ git merge nomBranche````

* Pour ignorer les changements d'espaces, passer ````-Xignore-space-change````
* Sans fast-forward ````--no-ff````

---

Les éventuels conflits se résolvent soit "à la main" (dans le fichier), soit en précisant quelle version on souhaite garder : 
    
````$ git checkout --ours fileName```` (récupère notre version, en local la plupart du temps)

````$ git checkout --theirs fileName```` (récupère leur version, celle du répo distant la plupart du temps)

---

Annuler un merge (retour à l'état d'avant merge) :
    
````$ git reset --hard HEAD````

---

Merger seulement un commit d'une autre branch
    
````$ git cherry-pick numeroCommit````

Annuler un cherry-pick
    
````$ git cherry-pick --abort````


Rebase :
-------

Rebase une branche afin de ne pas polluer l'historique de "commit de merge" (uniquement pour mettre à jour des branches de type feature) :
    
````$ git rebase nomBranche````

Annuler un rebase (on perd ce qui est staged)
    
````$ git rebase --abort````

Après avoir rebase master sur une branche de type feature (à condition que les deux soient à jour) :

````$ git push origin feature-branch````

* IMPORTANT (__--force__) : 
  * si la branche de type feature à déjà été poussé sur le répo distant, on est train d'essayer de remplacer son historique de commits donc il faudra forcer :
    * S'assurer que personne d'autre n'a travailler sur cette même branche :
      * ````$ get fetch ````
      * ````$ git diff nomBranche origin/nomBranche````
      * si diff, puller
    * ````$ git push origin feature-branch --force````
  * maintenant que l'on a forcé l'historique de répo distant si une personne récupère notre branche, même problème (même sans avoir pushé quoi que ce soit) :
    * ````$ get fetch ````
    * ````$ git diff nomBranche origin/nomBranche````
    * ````$ git reset origin/nomBranche --hard````

Taguer un instant donné :
--------------------------

Crée un tag

````$ git tag -a 0.0.1 -m "Release version 0.0.1"````

---
Crée un tag avec l'id du commit, sans faire de checkout

````$ git tag -a 0.0.1 9fceb02 -m "Message here" ````

---

Pousse un tag (ne commit rien, seulement le tag)

````$ git push origin 0.0.1 ````


Créer/appliquer un patch :
--------------------------

Crée le patch depuis un SHA de commit 

````$ git format-patch -1 ca414f1 --stdout > test.patch````

Ajouter le commit dans le patch sur la branche courrante 

* ````$ git apply --stat test.patch```` (juste pour vérifier que c'est ok)
* ````$ git am < test.patch````


Submodule :
--------------------------

> Doc : https://git-scm.com/book/fr/v1/Utilitaires-Git-Sous-modules 

1. Initialiser un submodule (la première fois) : 
    1. Crée le projet dans GitLab
    2. Initialiser le submodule dans le projet le nécéssitant : 
        1. ````$ git submodule add git@aiprod.com:jela/le_projet_du_submodule.git le\chemin\ou\copie\submodule```` (le dossier ne doit pas encore exister)
    3. Un fichier ".gitmodules" a été crée (si c'est le premier utilisé). Pour info, la commande précédente "set" aussi le module dans ".git/config" et copie le dossier ".git/" du submodule dans ".git/modules" du projet parent, via un lien symbolique dans le dossier du module
    4. Si un changement est effectué dans le submodule, quand ````$ git status````, il sera écrit à côté du dossier "(modified content)", il faudra se rendre dans dossier pour commiter
2. Updater un module depuis le projet principal : 
    1. ````$ git submodule update --init --recursive````
3. Si besoin de supprimer un submodule (c'est pas simple) : http://stackoverflow.com/a/1260982/1104858

Git Lab :
---------

* Si pas de droit sur master, faire un merge-request :
    * Sélectionner la branche voulu et la branche sur laquel on souhaite merger (master par exemple)
    * Assigner le merge-request
    * Quand la branche sera merger (pas forcément via Git Lab), elle sera automatiquement fermé

* Faire référence à une issue (dans une autre issue ou pull request)
    * Lorem ipsum #123

* Commiter les fichiers "staged" en référencant une issue
    
````$ git commit -m “Test #123 => lorem ipsum”````

* Commiter les fichiers "staged" tout en fermant une issue
    
````$ git commit -m “Fixed #123, fixed #124 => lorem ipsum” ````

Documentations : 
----------------

* [How to undo (almost) anything with Git](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)


Configuration : 
---------------

* Ne pas considerer les changements de droits sur un fichier comme un changement pour Git : 

````git config core.fileMode false ````
