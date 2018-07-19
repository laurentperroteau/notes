
Build Ionic
===========


Suite android pour Ionic sur Ubuntu : 
------------------------------------

* https://gist.github.com/lirantal/736e06a4ba562887a075dfa7698d844d#file-ionic-2-android-setup-for-ubuntu-16-04-L18 
* https://stackoverflow.com/questions/43356833/cordova-anddroid-requirements-failed-could-not-find-an-installed-version-of-gra/43805606
* commande : `ionic cordova run android --prod ou ionic cordova run android --prod --release`
  
Pour signer l'APK :
* depuis la racine
* $ (la première fois) jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias
* $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk my-alias
* $ zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk DiorAddictToDigital.apk

key jdk pass 123456
  
  
