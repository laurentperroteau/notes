 State management :
 ------------------
 
 "_Si plus de 2 ou 3 services/model/request API sont interconnectés, utiliser [ngRx](https://github.com/ngrx/store)_", pourquoi :
 * rxjs est censé faire le job mais n'est pas assez simple à utiliser (i.e. à moins d'avoir que des devs expert en programation fonctionnel, rxjs n'est pas évident à utliser et les erreurs ont des répercutions très importantes)
 * la "strict unidirectional data flow" semble être la solution
 * ngrx permet d'utiliser rxjs sans avoir a le maitriser parfaitement
 * toujours faire confiance à la communauté, si elle dit que Redux est la solution à tous les maux du "state management", ça doit être vrai
 
 Ressources :
 * http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/
