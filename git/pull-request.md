Pull Request : 
==============

> j'ai joints plusieurs commandes GIT via `&&` pour faire plus succinct mais on peut les exécuter une par une

Créer un Pull Request :
-----------------------

1. __Démarrer sur une nouvelle `feature`__ (toujours depuis `develop`) : 
  * ````$ git branch feature/coucou && git checkout feature/coucou````
2. Pendant le développement de la `feature` et avant le merge final, __mettre à jour `develop`...__ 
  * ````$ git checkout develop && git pull````
3. __... afin que la `feature` soit à jour__ : 
  * ````$ git checkout feature/coucou && git rebase develop````
  * Avec ce Workflow, c'est le seul moment où il peut y avoir des conflits ! 
  * Eviter `-m "msg commit"` après un merge, on perd les commentaires automatique de GIT qui liste des fichiers qui était en conflit
4. __Pousser enfin la branche sur le repo distant__ : 
  * ````$ git push origin feature/coucou````
  * Dans le message de réponse est précisée une URL pour créer une Merge Request sur GitHub, GitLab ou Bitbucket
  
 __ATTENTION Rebase__ :
 * si plusieurs personnes travaille sur la même feature, faire un `merge` à la place du `rebase`
 * utiliser `--force` si la branche de type feature à déjà été poussé sur le répo distant (toujours à condition d'être seul a travailler sur cette branche)
  

Review une Pull Request :
-------------------------

1. __Récupérer la Pull Request__ :
  * ````$ git checkout -b feature/coucou origin/feature/coucou````
2. __Tester la `feature` en local__
3. __Review le code__ via GitHub, GitLab ou Bitbucket et ajouter des commentaires si besoin de correction/refactorisation
4. Si la branche est valide, cliquer sur __"Merge" sur GitHub, GitLab ou Bitbucket__

Bonus :
-------

* `$ git checkout -` permet de se positionner sur la dernière branche utilisée)
* ajouter des alias :
  * New Branch :
    * `$ git config --global alias.nb "!f() { git branch $1 && git checkout $1; }; f"`
    * => `$ git nb feature/coucou`
  * Checkout Remote Branch : `$ git config --global alias.crb "!f() { git checkout -b $1 origin/$1; }; f"`
    * => `$ git crb feature/coucou`
* Il est aussi possible de comparer deux branches via l'IDE (sur WebStorm/PhpStorm > Compare with branch > `develop`)

