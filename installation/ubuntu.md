Ubuntu 17.10
============

> Concerne une instalation en dual-boot avec Windows 10 sur un PC portable récent (en 2017)

__Suivre [ce tuto](https://soozx.fr/installer-ubuntu-dual-boot-windows-10/) très complet, sauf__ :

* que j'ai eu besoin de [désactiver le `secure boot`](https://doc.ubuntu-fr.org/desactiver_secure_boot) depuis le BIOS (F12)
* que c'est plus facile ce suivre la [doc d'Ubuntu pour créer un live-USB](https://doc.ubuntu-fr.org/live_usb#creation_d_un_live-usb_depuis_windows)
* qu'il a fallu aussi [amorcer depuis le BIOS (F12) la clé live-USB](https://doc.ubuntu-fr.org/tutoriel/amorcer_sur_cd_ubuntu)

Autre doc d'Ubuntu : [cohabitation Ubuntu/Windows](https://doc.ubuntu-fr.org/cohabitation_ubuntu_windows)

## Pour le XPS

1. Installer un première fois ubuntu, plusieurs problèmes
2. Après update du bios, réinstallation de ubuntu
3. Presque plus de problème, ni Wifi, ni luminosité de l'écran
4. Suivi ce tuto (sauf luminosité, pas besoin)
5. 

Ce que j'avais pour la première installe :

* Tuto complet (avec fix wifi et nvidia) : https://medium.com/@tylergwlum/my-journey-installing-ubuntu-18-04-on-the-dell-xps-15-7590-2019-756f738a6447 => prochaine fois (si besoin), ne pas installer wifi dans le home (au même niveau que Documents)
* Activiation multitouch : https://medium.com/@dgviranmalaka/how-to-enhance-touch-pad-gestures-like-mac-in-ubuntu-18-04-laptop-f5f25d5a0b4f
* Fix suspend : https://www.dell.com/community/Linux-General/XPS-15-9570-with-Ubuntu-18-04-1-not-resuming-after-suspend/td-p/6128710
* Luminosité :
  * ~~https://askubuntu.com/questions/1179384/screen-brightness-not-changing-on-dell-xps-7590é~~ => fonctionne pas, j'ai un redémarage bizarre après, si réinstalle ne pas faire celui-ci (et ne pas créer un répertoire git pour des installes system)
  * cette commande fonction `xrandr --output $(xrandr --listmonitors | awk '$1 == "0:" {print $4}') --brightness 0.6`
 
