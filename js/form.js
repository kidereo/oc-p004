/**
 * DOM elements
 */
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const bDay = document.getElementById('birthdate');
const qty = document.getElementById('quantity');
const formLocations = document.getElementById('form-locations');
const individualLocations = document.querySelectorAll('#form-locations .checkbox-input');
const tnc = document.getElementById('checkbox1');


/**
 * Variables
 */
const regexName = /^[a-z ,.'-]+$/i;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const minimumNameLength = 2;
const minimumAge = 16;

/**
 * Check if the first name is valid
 * @returns {boolean}
 */
function validateFirstName() {
    if (theNameIsValid(firstName)) {
        setDataErrorVisible(firstName);
        setBorderToError(firstName);
        return false;
    }
    setBorderToValid(firstName);
    return true;
}

/**
 * Check if the last name is valid
 * @returns {boolean}
 */
function validateLastName() {
    if (theNameIsValid(lastName)) {
        setDataErrorVisible(lastName);
        setBorderToError(lastName);
        return false;
    }
    setBorderToValid(lastName);
    return true;
}

/**
 * Check if the email is valid
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
 * Check if the age is valid
 * @returns {boolean}
 */
function validateBirthdate() {
    if (calculateAge() < minimumAge || !bDay.value) {
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
 * Check if any city is selected
 * @returns {boolean}
 */
function validateLocation() {
    for (let i = 0; i < individualLocations.length; i++) {
        if (individualLocations[i].checked) {
            return true;
        }
    }
    formLocations.setAttribute('data-error-visible', 'true');
    return false;
}

/**
 * Check if the T&C box is selected
 * @returns {boolean}
 */
function validateTnc() {
    if (tnc.checked) {
        document.getElementById('tnc-checkbox').classList.remove('outline-error');
        return true;
    }
    setDataErrorVisible(tnc);
    document.getElementById('tnc-checkbox').classList.add('outline-error');
    return false;
}

/**
 * Validate fields on the focusout
 */
firstName.addEventListener('focusout', () => {
    let valid = validateFirstName();
    if (valid) {
        setDataErrorHidden(firstName);
    }
});

lastName.addEventListener('focusout', () => {
    let valid = validateLastName();
    if (valid) {
        setDataErrorHidden(lastName);
    }
});

eMail.addEventListener('focusout', () => {
    let valid = validateEmail();
    if (valid) {
        setDataErrorHidden(eMail);
    }
});

bDay.addEventListener('focusout', () => {
    let valid = validateBirthdate();
    if (valid) {
        setDataErrorHidden(bDay);
    }
});

qty.addEventListener('focusout', () => {
    let valid = validateQuantity();
    if (valid) {
        setDataErrorHidden(qty);
    }
});

formLocations.addEventListener('change', () => {
    let valid = validateLocation();
    if (valid) {
        formLocations.setAttribute('data-error-visible', 'false');
    }
});

tnc.addEventListener('change', () => {
    let valid = validateTnc();
    if (valid) {
        setDataErrorHidden(tnc);
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
 * Function to check both name fields for correctness
 * @param name
 * @returns {boolean}
 */
function theNameIsValid(name) {
    return name.value.length < minimumNameLength || !name.value.match(regexName);
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
    let firstNameIsValid = validateFirstName();
    let lastNameIsValid = validateLastName();
    let emailIsValid = validateEmail();
    let bDayIsValid = validateBirthdate();
    let qtyIsValid = validateQuantity();
    let locIsValid = validateLocation();
    let tncIsValid = validateTnc();
    if (firstNameIsValid &&
        lastNameIsValid &&
        emailIsValid &&
        bDayIsValid &&
        qtyIsValid &&
        locIsValid &&
        tncIsValid) {
        return true;
    }
    return false;
}
