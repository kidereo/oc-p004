/**
 * DOM elements
 */
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const bDay = document.getElementById('birthdate');
const qty = document.getElementById('quantity');
const regexName = /^[a-z ,.'-]+$/i;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * Check if the first name is kosher
 * @returns {boolean}
 */
function validateFirstName() {
    if ((firstName.value).length < firstName.minLength || !firstName.value.match(regexName)) {
        setDataErrorVisible(firstName);
        setBorderToError(firstName);
        return false;
    }
    setBorderToValid(firstName);
    return true;
}

/**
 * Check if the last name is kosher
 * @returns {boolean}
 */
function validateLastName() {
    if ((lastName.value).length < lastName.minLength || !lastName.value.match(regexName)) {
        setDataErrorVisible(lastName);
        setBorderToError(lastName);
        return false;
    }
    setBorderToValid(lastName);
    return true;
}

/**
 * Check if the email is kosher
 * @returns {boolean}
 */
function validateEmail() {
    if (!eMail.value.match(regexEmail)) {
        setDataErrorVisible(eMail);
        setBorderToError(eMail);
        return false;
    }
    setBorderToValid(eMail);
    return true;
}

/**
 * Check if the age is kosher
 * @returns {boolean}
 */
function validateBirthdate() {
    if (calculateAge() < parseInt(bDay.min) || !bDay.value) {
        setDataErrorVisible(bDay);
        setBorderToError(bDay);
        return false;
    }
    setBorderToValid(bDay);
    return true;
}

/**
 * Check if the number of tournaments makes sense
 * @returns {boolean}
 */
function validateQuantity() {
    if (qty.value < parseInt(qty.min) || qty.value > parseInt(qty.max) || !qty.value) {
        setDataErrorVisible(qty);
        setBorderToError(qty);
        return false;
    }
    setBorderToValid(qty);
    return true;
}

/**
 * Validate fields on the focusout
 */
firstName.addEventListener('focusout', () => {
    validateFirstName();
    if (validateFirstName()) {
        setDataErrorHidden(firstName);
    }
});

lastName.addEventListener('focusout', () => {
    validateLastName();
    if (validateLastName()) {
        setDataErrorHidden(lastName);
    }
});

eMail.addEventListener('focusout', () => {
    validateEmail();
    if (validateEmail()) {
        setDataErrorHidden(eMail);
    }
});

bDay.addEventListener('focusout', () => {
    validateBirthdate();
    if (validateBirthdate()) {
        setDataErrorHidden(bDay);
    }
});

qty.addEventListener('focusout', () => {
    validateQuantity();
    if (validateQuantity()) {
        setDataErrorHidden(qty);
    }
});

/**
 * Helper functions to save typing
 * @param element
 */
function setDataErrorVisible(element) {
    element.parentElement.setAttribute('data-error-visible', 'true');
}

function setDataErrorHidden(element) {
    element.parentElement.setAttribute('data-error-visible', 'false');
}

function setBorderToError(element) {
    element.classList.remove('border-valid');
    element.classList.add('border-error');
}

function setBorderToValid(element) {
    element.classList.remove('border-error');
    element.classList.add('border-valid');
}

/**
 * Function to calculate age.
 * Calculates a year of 365.25 days (0.25 because of leap years) in ms.
 * @returns {number}
 */
function calculateAge() {
    const birthDay = new Date(bDay.value);
    const yearInMs = 365.25 * 24 * 60 * 60 * 1000;
    return Math.floor((Date.now() - birthDay) / yearInMs);
}

/**
 * Function to  validate and allow dispatch of the form on submission
 * @returns {boolean}
 */
function validate() {
    validateFirstName();
    validateLastName();
    validateEmail();
    validateBirthdate();
    validateQuantity()
    if (validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validateBirthdate() &&
        validateQuantity()) {
        return true;
    }
    return false;
}
