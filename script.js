// Fonction pour charger un fichier texte
function File(texte_cvfc, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", texte_cvfc, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// Fonction pour choisir une phrase au hasard dans le texte
function sentence(texte_cvfc) {
    var phrases = texte_cvfc.split("\n"); // Séparer les phrases par retour à la ligne
    var indice = Math.floor(Math.random() * phrases.length); // Choisir un indice au hasard
    return phrases[indice];
}

// Utilisation : charger le fichier texte et choisir une phrase au hasard
File("texte_cvfc.txt", function (texte_cvfc) {
    var phrase = sentence(texte_cvfc);
    document.getElementById("phrase").textContent = phrase; // Mettre à jour le contenu de l'élément HTML avec la phrase choisie
});


function characterArray (){
    phrase.split('').forEach(character => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
    })
}