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













