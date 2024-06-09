const quoteDisplayElement = document.getElementById('phrase')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

let startTime;

quoteInputElement.addEventListener('input', () => {
    if (quoteInputElement.value.length === 1 && !startTime) {
        startTimer();
    }

    console.log('change');
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character === undefined) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
        }
    })
})

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
    var phrases = texte_cvfc.split("\n").filter(function(phrase) {
        return phrase.trim().length > 0; // Filtrer les lignes vides
    });
    if (phrases.length === 0) {
        return ""; // Retourner une chaîne vide si toutes les lignes sont vides
    }
    var indice = Math.floor(Math.random() * phrases.length); // Choisir un indice au hasard
    return phrases[indice];
}



// Fonction pour séparer la phrase lettre par lettre et les entourer avec des <span>
function displayPhraseWithSpans(phrase) {
    if (!quoteDisplayElement) {
        console.error('L\'élément quoteDisplayElement est introuvable.');
        return;
    }

    quoteDisplayElement.innerHTML = ''; // Vider le contenu précédent
    phrase.split('').forEach(character => {
        const span = document.createElement('span');
        span.innerText = character;
        quoteDisplayElement.appendChild(span);
    });
}


// Utilisation : charger le fichier texte et choisir une phrase au hasard
File("texte_cvfc.txt", function (texte_cvfc) {
    var phrase = sentence(texte_cvfc);
    //document.getElementById("phrase").textContent = phrase; // Mettre à jour le contenu de l'élément HTML avec la phrase choisie
    textArray = Array.from(phrase);
    displayPhraseWithSpans(phrase);
});


function startTimer() {
    startTime = new Date();
    interval = setInterval(() => {
        timerElement.innerText = getTimerTime();
    }, 1000);
}

function getTimerTime () {
    return Math.floor((new Date() - startTime) / 1000)
}