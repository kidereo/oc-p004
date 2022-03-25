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
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * Modal events: Close modal
 * a. By clicking on the top-right X
 * b. By clicking outside of the modal form
 */
modalCloseX.onclick = closeModal;

modalContent.onclick = (event) => event.stopPropagation();
modalBackground.onclick = closeModal;

/**
 * Modal functions
 * a. Launch the modal
 * b. Close the modal
 */
function launchModal() {
    modalBackground.style.display = "block";
}

function closeModal() {
    modalBackground.style.display = "none";
}

