const form = document.querySelector("#form");
const first_name = document.querySelector("#first-name");
const last_name = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");

form.addEventListener((e) => {
    e.preventDefault();

    // const { first_name, last_name, email, phoneNumber, password, repeatPassword } = Object.fromEntries(formDataEntries);

    const errorName = validateFirstName(first_name);
    const errorSecondName = validateLastName(last_name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const secondPasswordError = confirmPassword(repeatPassword);


    if (errorName) {
        const firstNameError = document.querySelector('.errorMessages');
        firstNameError.innerText = errorName;
    }

    if (errorSecondName) {
        const secondNameError = document.querySelector('.errorMessages');
        secondNameError.innerText = errorSecondName;
    }

    if (emailError) {
        // select the email form field message element
        const emailErrorMessageElement = document.querySelector('.errorMessages');
        // show email error message to user
        emailErrorMessageElement.innerText = emailError;
    }

    if (passwordError) {
        const passwordErrorMessageElement = document.querySelector('.errorMessages');
        passwordErrorMessageElement.innerText = passwordError;
    }

    if (secondPasswordError) {
        const secondPasswordError = document.querySelector('.errorMessages');
        secondPasswordError.innerText = secondPasswordError;
    }



});

validateFirstName((first_name) => {
    let incorrectInput = '';

    const firstLetter = first_name.value[0];

    const firstLetterIsUpperCase = (firstLetter === firstLetter.toUpperCase());

    if (!firstLetterIsUpperCase) {
        incorrectInput += ' The first letter of username must be uppercase.\n';
    }
});
validateLastName((last_name) => {
    let incorrectInput = '';

    const firstLetter = last_name.value[0];

    const firstLetterIsUpperCase = (firstLetter === firstLetter.toUpperCase());

    if (!firstLetterIsUpperCase) {
        incorrectInput += ' The first letter of username must be uppercase.\n';
    }
});


validatePassword((password, minlength) => {
    if (!password) return 'Password is required';

    if (password.length < minlength) {
        return `Please enter a password that's at least ${minlength} characters long`;
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        return 'Please use at least one capital letter.';
    }

    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
        return 'Please use at least one number.';
    }

    return '';

});

validateEmail((email) => {
    if (!email) return 'Email cannot be empty';

    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
        return 'Please enter a valid email';
    }

    return '';
});

confirmPassword((password, repeatPassword) => {
    if (password.value !== repeatPassword.value) return 'Passwords doesn\'\t match';

});