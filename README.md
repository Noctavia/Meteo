Application MÃ©tÃ©o



ðŸŒ¦ï¸ Description



Une application web permettant de consulter la mÃ©tÃ©o en temps rÃ©el et les prÃ©visions Ã  5 jours pour nâ€™importe quelle ville. Les donnÃ©es sont rÃ©cupÃ©rÃ©es via lâ€™API OpenWeatherMap. Lâ€™application propose Ã©galement un mode sombre pour une expÃ©rience utilisateur amÃ©liorÃ©e.



ðŸš€ FonctionnalitÃ©s

â€¢ MÃ©tÃ©o en temps rÃ©el : TempÃ©rature, humiditÃ©, pression, et vitesse du vent.

â€¢ PrÃ©visions Ã  5 jours : Affichage des prÃ©visions Ã  venir pour chaque jour.

â€¢ Mode sombre : Bascule entre mode sombre et clair pour un meilleur confort visuel.

â€¢ Recherche de ville : Entrez le nom dâ€™une ville pour obtenir ses donnÃ©es mÃ©tÃ©o.



ðŸ“¦ Installation



PrÃ©requis

â€¢ Un navigateur web moderne (Google Chrome, Firefox, etc.).

â€¢ Un Ã©diteur de texte (Visual Studio Code, Sublime Text, etc.).



Ã‰tapes dâ€™installation

1. Clonez le projet ou tÃ©lÃ©chargez les fichiers du projet :

git clone https://github.com/votre-nom/utilisateur/meteo-app.git



2. Obtenez une clÃ© API OpenWeatherMap :

â€¢ Allez sur OpenWeatherMap, crÃ©ez un compte, et rÃ©cupÃ©rez votre clÃ© API.

3. Ajoutez la clÃ© API dans le code :

â€¢ Ouvrez le fichier script.js.

â€¢ Remplacez VOTRE_CLE_API par votre clÃ© API dans le code :

const apiKey = 'VOTRE_CLE_API'; // Remplacez par votre clÃ© API



4. Ouvrez lâ€™application :

â€¢ Double-cliquez sur index.html ou ouvrez-le dans votre Ã©diteur de texte et visualisez-le dans votre navigateur.



ðŸ“‚ Structure des fichiers

meteo-app/

â”œâ”€â”€ index.html      # Page principale de l'application

â”œâ”€â”€ style.css       # Styles de l'application (CSS)

â”œâ”€â”€ script.js       # Logique JavaScript de l'application

â””â”€â”€ README.md       # Documentation de l'application (ce fichier)

âš™ï¸ Usage

â€¢ Rechercher la mÃ©tÃ©o : Entrez une ville dans le champ de recherche et cliquez sur â€œObtenir la mÃ©tÃ©oâ€ .

â€¢ Mode sombre : Utilisez le bouton en haut de la page pour basculer entre le mode clair et sombre.



ðŸ› ï¸ Technologies utilisÃ©es

â€¢ HTML : Structure de la page.

â€¢ CSS : Mise en page et design (y compris le mode sombre).

â€¢ JavaScript : RÃ©cupÃ©ration des donnÃ©es mÃ©tÃ©o via lâ€™API et interaction avec lâ€™utilisateur.

â€¢ OpenWeatherMap API : Fournisseur des donnÃ©es mÃ©tÃ©orologiques.

â€¢ Chart.js : Affichage des prÃ©visions sous forme graphique.



ðŸ“ Licence



Ce projet est sous licence MIT.
