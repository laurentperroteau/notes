Pull Request : 
==============

> j'ai joins plusieurs commandes GIT via `&&` pour faire plus succinct mais on peut les exécuter une par une

#### 1. Démarrer sur une nouvelle `feature` (toujours depuis `develop`) : 
  * ````$ git branch feature/coucou && git checkout feature/coucou````
#### 2. Pendant le développement de la `feature` et avant le merge final, mettre à jour `develop`... 
  * ````$ git checkout develop && git pull````
#### 3. ... afin que la `feature` soit à jour : 
  * ````$ git checkout feature/coucou && git merge develop````
  * Eviter `-m "msg commit"` après un merge, on perd les commentaires automatique de GIT qui liste des fichiers qui était en conflit
  * C'est le seul moment où il peut y avoir des conflits ! 
#### 4. Pousser enfin la branche sur le repo distant : 
  * ````$ git push origin feature/coucou````. 
  * Dans le message de réponse est précisée une URL pour créer une Merge Request sur GitHub, GitLab ou Bitbucket (ce n'est qu'une référence à la branche, si le développement de la `feature` n'est pas fini au prochain "push" la Pull Request sera mis à jour)
#### 5. La `feature` peut maintenant être mergé sur `develop` via GitHub, GitLab ou Bitbucket en acceptant le Pull Request

Bonus :
-------

* `$ git checkout -` permet de se positionner sur dernière branche utilisée)
