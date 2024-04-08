const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav'); // L'id 'nav-items' correspond à la div contenant votre menu

navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    // Modifier l'apparence des trois barres lorsque le menu est ouvert ou fermé
    const spans = navToggle.querySelectorAll('span');
    if (nav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7.8px, -7.8px)';
    } else {
        spans[0].style.transform = 'rotate(0) translate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0)';
    }
});

function openImage(element) {
    const imageSrc = element.querySelector('img').src;
    const imageAlt = element.querySelector('img').alt;

    document.getElementById('enlarged-image').src = imageSrc;
    document.getElementById('enlarged-image').alt = imageAlt;
    document.getElementById('image-description').textContent = imageAlt;

    document.getElementById('overlay').style.display = 'flex';
}

function closeImage() {
    document.getElementById('overlay').style.display = 'none';
}

const closeButton = document.getElementById('close-button');
const topBar = document.getElementById('top-bar');

closeButton.addEventListener('click', () => {
    topBar.style.display = 'none'; // Cache la barre lorsque l'utilisateur clique sur le bouton de fermeture
});









function calculate2() {
    var consommation = parseFloat(document.getElementById('consommation').value);
    var tempsRoulage = parseFloat(document.getElementById('tempsRoulage').value);
    var tempsDelestage = parseFloat(document.getElementById('tempsDelestage').value);
    var tempsIntegration = parseFloat(document.getElementById('tempsIntegration').value);
    var tempsDegagement = parseFloat(document.getElementById('tempsDegagement').value);
    var tempsMarge = parseFloat(document.getElementById('tempsMarge').value);
    var tempsCdb = parseFloat(document.getElementById('tempsCdb').value);
    

    // Ajoutez ici la logique pour ajouter les minutes en fonction du type de vol sélectionné
    var minutesSupplementaires = 0;
    var boutonVolLocal = document.querySelector('input[name="typeVol"][value="local"]');
    var boutonNavigationJour = document.querySelector('input[name="typeVol"][value="jour"]');
    var boutonNavigationNuit = document.querySelector('input[name="typeVol"][value="nuit"]');

    if (boutonVolLocal.checked) {
        minutesSupplementaires = 10;
    } else if (boutonNavigationJour.checked) {
        minutesSupplementaires = 30;
    } else if (boutonNavigationNuit.checked) {
        minutesSupplementaires = 45;
    }
    // Calcul du temps total en minutes
    var tempsTotal = tempsRoulage+ tempsDelestage + tempsIntegration + tempsDegagement + tempsMarge + tempsCdb;
    tempsTotal += minutesSupplementaires;
    // Ajoutez ici les autres temps

    // Conversion du temps total en heures
    var tempsTotalHeures = tempsTotal / 60;

    // Calcul du carburant nécessaire
    var carburantNecessaire = tempsTotalHeures * consommation;

    // Affichage des résultats
    document.getElementById('result').innerHTML = "Temps carburant : " + tempsTotalHeures.toFixed(2) + " heures<br>Nombre de litres minimum à emmener : " + carburantNecessaire.toFixed(2) + " litres";
    var popup = document.getElementById('popup');
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Temps carburant : " + tempsTotalHeures.toFixed(2) + " heures<br>Nombre de litres minimum à emmener : " + carburantNecessaire.toFixed(2) + " litres";
    openPopup();
}
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";
}

function resetForm() {
    // Réinitialisation des champs de saisie
    document.getElementById('consommation').value = "";
    document.getElementById('tempsRoulage').value = "";
    document.getElementById('tempsDelestage').value = "";
    document.getElementById('tempsIntegration').value = "";
    document.getElementById('tempsDegagement').value = "";
    document.getElementById('tempsMarge').value = "";
    document.getElementById('tempsCdb').value = "";
    
    // Réinitialisation des boutons radio
    var boutons = document.querySelectorAll('input[name="typeVol"]');
    boutons.forEach(function(bouton) {
        bouton.checked = false;
    });
    // Fermeture de la fenêtre pop-up
    closePopup();
}










