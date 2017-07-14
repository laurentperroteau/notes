
REST Symfony :
==============

* DOC FOSRestBundle : http://symfony.com/doc/master/bundles/FOSRestBundle/index.html 
* DOC API local : http://localhost:8000/api/doc
* Exemple avec angular todoMVC : https://github.com/bayne/symfony-angular-todomvc
* Autre resource : https://gist.github.com/tjamps/11d617a4b318d65ca583

Cmd :
-----

* lister les routes : `php app/console router:debug`

Comment ça fonctionne :
-----------------------

* Config (Listener) :
    * dans `app/config/config.yml`, conf format, role, versioning etc...
* Data :
    * enregistré dans : `app/cache/dev/sf_note_data`
* Manager :
    * contient les méthodes fetch, get, set etc... sur la data
* Controller (Automatic Route & The View) :
    * Chaque nom de méthode défini un route :
        * ex get : 
            * public function __getNotesAction()__
            * défini la route `/notes` avec le verbe GET
        * Liste complète: http://symfony.com/doc/master/bundles/FOSRestBundle/5-automatic-route-generation_single-restful-controller.html#define-resource-actions 
    * Pour chaque méthode de type action, les commentaires contiennent :

```php
        /**
         * Description de l'action (afficher dans API doc)
         *
         * @ApiDoc(
         *   resource = true,
         *   input = "AppBundle\Form\NoteType", // info pour API doc
         *   statusCodes = {
         *     200 = "Returned when successful", // description des statuts (afficher dans API doc)
         *     400 = "Returned when the form has errors"
         *   }
         * )
         *
         * @Annotations\View(
         *   template = "AppBundle:Note:newNote.html.twig", // template utilisé
         *   statusCode = Response::HTTP_BAD_REQUEST 
         * )
         *
         * @param Request $request the request object // php doc
         *
         * @return FormTypeInterface[]|View // php doc
         */
         public function postNotesAction(Request $request) // défini la route
         {
```

    
CORS (Access-Control-Allow-Origin) :
------------------------------------

* 1er solution (barbare) : `header('Access-Control-Allow-Origin: *');` dans controller
* 2ème solution (correct) : https://github.com/nelmio/NelmioCorsBundle
    * l'option `allow_origin: ['^http://localhost:[0-9]+']`  ajoute au header : 
        * `Access-Control-Allow-Origin:http://localhost:3000`
   

