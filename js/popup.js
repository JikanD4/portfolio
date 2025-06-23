// Fonction pour gérer les modals
function handleModal(modalId, btnId, closeClass) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = document.querySelector("#" + modalId + " ." + closeClass);
    var body = document.querySelector("body");

    btn.onclick = function() {
        modal.style.display = "block";
        body.classList.add("modal-open");
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.classList.remove("modal-open");
    }
}

window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    var body = document.querySelector("body");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            body.classList.remove("modal-open");
        }
    }
}

// Initialiser les modals pour chaque compétence
handleModal("popupModalR", "openPopupBtnR", "closeBtnR");
handleModal("popupModalP", "openPopupBtnP", "closeBtnP");
handleModal("popupModalS", "openPopupBtnS", "closeBtnS");
handleModal("popupModalC", "openPopupBtnC", "closeBtnC");
handleModal("popupModalitop", "openPopupBtnitop", "closeBtnitop");
handleModal("popupModalportfolio", "openPopupBtnportfolio", "closeBtnportfolio");
handleModal("popupModalescapegame", "openPopupBtnescapegame", "closeBtnescapegame");
handleModal("popupModalkivy", "openPopupBtnkivy", "closeBtnkivy");
handleModal("popupModalpentesting", "openPopupBtnpentesting", "closeBtnpentesting");
handleModal("popupModalpython", "openPopupBtnpython", "closeBtnpython");