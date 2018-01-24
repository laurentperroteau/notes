
Animations CSS
==============

#### Utiliser dans la mesure du possible les propriétés "rendu par le GPU" (carte graphique) :

* transform
* opacity
* filter
* NE JAMAIS AU GRAND JAMAIS UTILISER __"ALL"__ (~~transition-property: all~~)

Pourquoi ? [lire cet article](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)

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

#### Test d'une progress bar :

````html
<script>

  var progressAnimationId;
  var stop = document.getElementById('stop');
  var progressInner = document.getElementById('progress-bar-inner');
  var start = null;

  function progressFun(timestamp) {
	if (!start) start = timestamp;
	var progress = timestamp - start;
	
	// C'est un timestanp, donc /100
	progressInner.style.webkitTransform = 'translateX(-' + Math.min(progress / 100) + '%)';

	if (progress < 10000) {
	  // Bien setter de nouveau le request id
	  progressAnimationId = window.requestAnimationFrame(progressFun);
	}
  }

  // Start
  progressAnimationId = window.requestAnimationFrame(progressFun);
  
  // Stop on click
  stop.addEventListener("click", function() {
	window.cancelAnimationFrame(progressAnimationId);
  }, false);
</script>
````
