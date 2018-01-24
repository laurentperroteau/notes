
Animations CSS
==============

#### Utiliser dans la mesure du possible les propriétés "rendu par le GPU" (carte graphique) :

* transform
* opacity
* filter
* NE JAMAIS AU GRAND JAMAIS UTILISER __"ALL"__ (~~transition-property: all~~)

Pourquoi ? [lire cette article](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)

#### Toujours préciser au navigateur quelle(s) propriété(s) va(vont) changer :

```
transition-property: transform;
will-change: transform;
```

-------

[will-change](http://caniuse.com/#feat=will-change) n'étant pas encore supporté sur IE et Edge, utiliser le "hack 3d" en forçant l'utilisation du GPU  : 

```
transform: translate3d(0, 0, 0);
```

Animations JS
=============

#### Utiliser `requestAnimationFrame` et jamais  `setInterval` ou `setTimeout`

Pourquoi ? [explications et exemple très parlant](https://stackoverflow.com/questions/38709923/why-is-requestanimationframe-better-than-setinterval-or-settimeout#answer-38709924)
