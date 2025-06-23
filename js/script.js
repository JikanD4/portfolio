document.addEventListener('DOMContentLoaded', function(){
    const typed = new Typed('.multiple-text', {
        strings: ['Étudiant en Réseaux et Cybersécurité','Passionné de Cyber', 'Animateur BAFA'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].classList.remove("active-tab");
    }
    evt.currentTarget.classList.add("active");
    evt.currentTarget.classList.add("active-tab");
    document.getElementById(tabName).style.display = "block";
}

// Simuler un clic sur l'onglet "Programmation" au chargement de la page
window.onload = function() {
    document.querySelector('.tablink[data-tab="Programmation"]').click();
};


function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}
