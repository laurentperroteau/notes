Reactive form
=============

Valeurs "disabled" :
--------------------

Les valeurs "disabled" ne remontent pas au FormGroup.value, deux solutions :
1. Attendre qu'Angular implemente le "readonly" : https://github.com/angular/angular/issues/11447
2. Implémenter le "readonly" en ajoutant l'attribut : `[attr.readonly]="readonly ? '' : null"`
3. Ne rien faire : si on créer la donnée, en "disabled", on ne devrait pas la POST... si la donnée est déjà existante, on devrait PATCH la donnée
4. Utiliser FormGroup.getRawValue(): https://angular.io/api/forms/FormGroup
