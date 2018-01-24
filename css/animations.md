
Animations CSS ?
===============

### Utiliser dans la mesure du possible les propriétés "rendu par le GPU" (carte graphique) :

* transform
* opacity
* filter
* NE JAMAIS AU GRAND JAMAIS UTILISER __"ALL"__ (~~transition-property: all~~)

### Toujours préciser au navigateur quelle(s) propriété(s) va(vont) changer :

```
transition-property: transform;
will-change: transform;
```

-------

[will-change](http://caniuse.com/#feat=will-change) n'étant pas encore supporté sur IE et Edge, utiliser le "hack 3d" en forçant l'utilisation du GPU  : 

```
transform: translate3d(0, 0, 0);
```

Pourquoi ? [Réponses](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)
