Notes méthodologie :
====================

Liste des différents type cycle de vie/workflow :
-------------------------------------------------

> quand type de fichier non précisé, env back

TODO: sujet script + bdd

* Options cummulable tous les workflows :
  * VCS
  * PRs
  * CI
  * Test
* FTP
* Simple checkout
* Copy/rsync fichier depuis local
* copy/rsync fichier depuis env ressemblant à prod
* copy/rsync fichier depuis env iso prod
* copy/rsync depuis runner pour fichiers statiques
* copy/rsync depuis runner
* Front vs Back : front moins sensible au diff env (seul version node importe et OS)

Quels besoins ? Quelles solutions ?
-----------------------------------

> faire un tableau avec coût et inconvénients

> new : un nouveau dev, un dev qui connaît pas le projet... en faite ça inclus tout le monde sauf si on a été le seul dev l'app

> état : quel version et commit/branche et qu'elle date de déploiement 

> env sensible : accéssible à client/testeur/user, en général env de prod et preprod min, voir qa/staging

- Un new peut-il pouvoir en 2s savoir l'état de l'app, solutions :
    - firebase hosting ou commit.txt
    - tag git/svn
    - automatisé ces tâches 
- Un new peut-il pouvoir en 2s savoir l'état de la bdd :
    - iso, a voir
- Un non-senior/master en doit pas pouvoir dépoyer l'app en prod, solutions :
    - CI avec protection branche
- Une même personne ne doit pas pouvoir dev une feature et la déployé sur un env sensible (même si il est master sur gitlab) :
   - ne pas le mettre master sur le projet ??? 
   - a tester Merge request approvals
- La prod doit être absolument iso à la preprod (voir qa/staging), solutions : 
    - le déploiement doit être fait depuis serveur preprod (duplication, rsync)
- Le code doit être review pour l'env de, solutions :
    - de preprod/qa/staging : PR, restriction sur branche develop (ou autre), déploiement auto ou check PR
    - de prod : iso mais master/tags
- On doit pouvoir faire vivre plusieurs version en même temps, solutions :
    - besoin d'une branche master-release-v1
- On doit pouvoir savoir qu'il n'y a théoriquement pas de régression, solutions :
   - les TU, test d'intégration etc...
   - snapshot composant si jest/react
   
 En attendant d'avoir le workflow parfait, quels besoins plus urgent :
 ---------------------------------------------------------------------

- Le super dev senior historique qui a tpujours misnen prod est en vacance au Bahamas mais je dois passer un hotfix en prod, solutions :
    - automatiser
    - TU etccc
   
#### autres notes a organiser

Aide a déterminer si besoin :
- gitlab ci
- PRs
- TU
- test fonctionnelle

Todo : 
- vérifier si PR merge toujours dans TODO gtlab
- comment rappeler todo dans gitlab
- voir todo obligatoire pour merge sur master
- voir changer nom run release : c'est simplement la création d'un tag depuis gitlab qui met en prod... Un script dans le projet alert si package.JSON pas a jour (par contre, le tag n'est pas forcément sur master ? )
- créer fichier commit.txt avec le nul commit, TG et date (pour les projets non héberger sur firebase)... Donc l'État toujours accessible, numéro afficher directement, dans console ou fichier commit

Parler des problèmes :
- Philippe wls rhbo prod : firebase permet de voir dernière mise en prod, le tag aussi... 
- on doit savoir, même pour un projet pas entretenu tous les jours a que état - commit il est
