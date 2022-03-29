/**
 * DOM elements
 */
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const regexName = /^[a-z ,.'-]+$/i;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * Check if the first name is kosher
 * @returns {boolean}
 */
function validateFirstName() {
    if ((firstName.value).length < firstName.minLength || !firstName.value.match(regexName)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.classList.remove('border-valid');
        firstName.classList.add('border-error');
        return false;
    }
    firstName.classList.remove('border-error');
    firstName.classList.add('border-valid');
    return true;
}

/**
 * Check if the last name is kosher
 * @returns {boolean}
 */
function validateLastName() {
    if ((lastName.value).length < lastName.minLength || !lastName.value.match(regexName)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.classList.remove('border-valid');
        lastName.classList.add('border-error');
        return false;
    }
    lastName.classList.remove('border-error');
    lastName.classList.add('border-valid');
    return true;
}

/**
 * Check if the email is kosher
 * @returns {boolean}
 */
function validateEmail() {
    if (!eMail.value.match(regexEmail)) {
        eMail.parentElement.setAttribute('data-error-visible', 'true');
        eMail.classList.remove('border-valid');
        eMail.classList.add('border-error');
        return false;
    }
    eMail.classList.remove('border-error');
    eMail.classList.add('border-valid');
    return true;
}

/**
 * Validate fields on the fly
 */
firstName.addEventListener('focusout', () => {
    validateFirstName();
    if (validateFirstName()) {
        firstName.parentElement.setAttribute('data-error-visible', 'false');
    }
});

lastName.addEventListener('focusout', () => {
    validateLastName();
    if (validateLastName()) {
        lastName.parentElement.setAttribute('data-error-visible', 'false');
    }
});

eMail.addEventListener('focusout', () => {
    validateEmail();
    if (validateEmail()) {
        eMail.parentElement.setAttribute('data-error-visible', 'false');
    }
});

/**
 * Function to  validate and allow dispatch of the form on submission
 * @returns {boolean}
 */
function validate() {
    validateFirstName();
    validateLastName();
    validateEmail();
    if (validateFirstName() && validateLastName() && validateEmail()) {
        return true;
    }
    return false;
}
