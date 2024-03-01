function jeuDuChiffreCache() {
    var niveau = prompt("Choisissez un niveau de difficulté : Facile, Intermédiaire, Difficile");
    var max, tentatives;

    switch(niveau.toLowerCase()) {
        case "facile":
            max = 10;
            tentatives = 5;
            break;
        case "intermédiaire":
            max = 50;
            tentatives = 7;
            break;
        case "difficile":
            max = 100;
            tentatives = 10;
            break;
        default:
            alert("Niveau de difficulté non reconnu. Veuillez réessayer.");
            return;
    }

    var chiffreCache = Math.floor(Math.random() * max) + 1;
    for(var i = 0; i < tentatives; i++) {
        var essai = prompt("Entrez un nombre entre 1 et " + max);
        if(essai == chiffreCache) {
            alert("Bravo ! Vous avez trouvé le chiffre caché.");
            return;
        } else if(essai < chiffreCache) {
            alert("Trop petit !");
        } else {
            alert("Trop grand !");
        }
    }

    alert("Désolé, vous n'avez pas trouvé le chiffre caché. Le chiffre était " + chiffreCache);
}
