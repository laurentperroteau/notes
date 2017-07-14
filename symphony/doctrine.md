
Doctrine
========

Cmd migration :
---------------

* créer une migration : `php bin/console doctrine:migration:diff`
* migrer/appliquer : `php bin/console doctrine:migrations:migrate`
* executer une migration : `doctrine:migrations:execute 123`
* annuler une migration : `doctrine:migrations:execute 123 --down`

__Reset bdd (attention) :__

* `php bin/console doctrine:schema:drop --force`
* suppr table migration
* migrate de nouveau


Ajouter une entity :
--------------------

* créer table/class Note :
    * option console :
        * `php app/console generate:doctrine:entity`
        * génère les fichiers AppBundle/Entity/Note.php
    * option yml : AppBundle/Resources/config/doctrine/Note.orm.yml
        * `php app/console doctrine:generate:entities AppBundle`
        * génère les fichiers :
            * AppBundle/Entity/Note.php
    * option annotation :
        * ajouter/actualiser des variables et leurs annotations
            * `php app/console doctrine:generate:entities AppBundle`
            * cela ajoutera les getter/setter

Notes tuto :
------------

* Annotations possible : en yml et xml
    * doc : http://symfony.com/doc/current/book/doctrine.html
* Exemple :
    * Pour que Doctrine connaisse nos objets, nous allons créer des fichiers "métadonnées" qui décrivent la façon dont nos objets seront stockés dans la BDD: :
        * ex: Resources/config/doctrine/Affiliate.orm.yml
        * OneToOne, OneToMany et ManyToMany => défini les relations (jointure) entre les tables
        * lifecycleCallbacks => créera des callback avant ou après get/set de la donnée
    * Doctrine peut générer les classes qui définissent nos objets :
        * cmd : `php app/console doctrine:generate:entities EnsJobeetBundle`
        * result : Entity/Affiliate.php
* Il est également possible de générer les entités depuis une classe php : 
    * `php bin/console doctrine:generate:entity (a tester)`
* Ajout fixtrue :
    * utilisation de DoctrineFixturesBundle
    * création de fixtures dans DataFixtures/ORM
    * generate : php app/console doctrine:fixtures:load
    * voir le résultat de la bdd dans le navigateur :
        * `php app/console doctrine:generate:crud --entity=EnsJobeetBundle:Job --route-prefix=ens_job --with-write --format=yml`

