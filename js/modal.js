/**
 * DOM elements
 */
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseX = document.getElementById("modal-close-x");
const modalContent = document.getElementById("modal-content");
const form = document.getElementById("form");
const confirmation = document.getElementById("confirmation");
const modalCloseBtn = document.getElementById("modal-close-btn");

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
 * c. By clicking the confirmation close button
 */
modalCloseX.onclick = closeModal;

modalBackground.onclick = closeModal;

modalCloseBtn.onclick = closeModal;

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
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('border-valid', 'border-error');
        elements[i].parentElement.setAttribute('data-error-visible', 'false');
    }
    //Reset error message on radio buttons and T&C checkbox
    document.getElementById('form-locations').setAttribute('data-error-visible', 'false');
    document.getElementById('checkbox1').parentElement.setAttribute('data-error-visible', 'false');
    document.getElementById('tnc-checkbox').classList.remove('outline-error');
    //Make sure the form is shown again if closed
    displayForm();
    //Clear confirmation
    hideConfirmation();
    //Hide the modal
    modalBackground.style.display = "none";
}

modalContent.onclick = (event) => event.stopPropagation();

/**
 * Modal confirmation functions
 */
function hideForm() {
    form.style.display = 'none';
}

function displayForm() {
    form.style.display = 'block';
}

function displayConfirmation() {
    confirmation.style.display = 'flex';
}

function hideConfirmation() {
    confirmation.style.display = 'none';
}


