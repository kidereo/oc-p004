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
const validateFirstName = () => {
    if ((firstName.value).length < firstName.minLength || !firstName.value.match(regexName)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.classList.add('border-red');
        return false;
    }

    firstName.classList.add('border-green');
    return true;
};

/**
 * Check if the last name is kosher
 * @returns {boolean}
 */
const validateLastName = () => {
    if ((lastName.value).length < lastName.minLength || !lastName.value.match(regexName)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.classList.add('border-red');
        return false;
    }

    lastName.classList.add('border-green');
    return true;
};

/**
 * Check if the email is kosher
 * @returns {boolean}
 */
const validateEmail = () => {
    if (!eMail.value.match(regexEmail)) {
        eMail.parentElement.setAttribute('data-error-visible', 'true');
        eMail.classList.add('border-red');
        return false;
    }

    eMail.classList.add('border-green');
    return true;
};

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
const validate = () => {
    validateFirstName();
    validateLastName();
    validateEmail();
    if (validateFirstName() && validateLastName() && validateEmail()) {
        return true;
    }
    return false;
};
