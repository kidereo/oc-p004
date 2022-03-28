/**
 * DOM elements
 */
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseX = document.getElementById("modal-close-x");
const modalContent = document.getElementById("modal-content");

/**
 * Modal events: Launch modal
 * NB: This is the original code
 */
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
    launchModal();
}));

/**
 * Modal events: Close modal
 * a. By clicking on the top-right X
 * b. By clicking outside of the modal form
 */
modalCloseX.onclick = closeModal;

modalBackground.onclick = closeModal;

/**
 * Modal functions
 * a. Launch the modal
 * b. Close the modal and reset the form
 * c. Stop modal from disappearing when outside area is clicked
 */
function launchModal() {
    modalBackground.style.display = "block";
}

function closeModal() {
    //Reset fields' values on modal closure
    document.forms[0].reset();
    //Reset borders and error messages
    const elements = document.getElementsByClassName('text-control');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('border-green', 'border-red');
        elements[i].parentElement.setAttribute('data-error-visible', 'false');
    }

    modalBackground.style.display = "none";
}

modalContent.onclick = (event) => event.stopPropagation();

