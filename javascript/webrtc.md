 Hostspot en mode web avec webrtc
 =================================

> support [à partir de Edge 75/Safari 11](https://caniuse.com/#search=webrtc)

Solutions pour faire parler 2 navigateurs sur un même device :
-------------------------------------------------------------

> possible sur le même réseau WIFI si les navigateurs non-éméteurs se connectent à l'adresse IP de l'émeteur

* Pure web avec [simple-peer](https://github.com/feross/simple-peer) :
    * Un premier navigateur lance un `offer` (un objet JS), un deuxième navigateur renseigne cette `offer` et reçoit une `anwser`, qu'il doit transmettre au navigateur ayant créé l'`offer`... enfin une fois renseigné, la connection P2P est faites.
    * Concrètement, cela nécessite un serveur distant pour échanger les `offer/anwser`
* Node/Web socket avec [socket.io P2P](https://github.com/socketio/socket.io-p2p) :
    * Lancer le serveur
    * Se connecter via le navigateur au port localhost du serveur
    * Tous les navigateurs reçoivent les messages (ou si "room" privée, seulement ceux de la "room")

### Pour info :

1. Android supporte le P2P de base mais pas iOS
2. Node.js permet de résoudre un domaine en IP pour les partages WIFI : [node.js DNS](https://nodejs.org/api/dns.html)
