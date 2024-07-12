function displayError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    const errors = document.getElementsByClassName('error');
    for (let error of errors) {
        error.innerText = '';
    }
}

function validateForm() {
    clearErrors();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    let isValid = true;

    if (name === '') {
        displayError('nameError', 'Nama harus diisi.');
        isValid = false;
    }

    if (age === '') {
        displayError('ageError', 'Umur harus diisi.');
        isValid = false;
    } else if (isNaN(age) || age <= 0) {
        displayError('ageError', 'Umur harus berupa angka positif.');
        isValid = false;
    }

    if (email === '') {
        displayError('emailError', 'Email harus diisi.');
        isValid = false;
    } else if (!validateEmail(email)) {
        displayError('emailError', 'Email tidak valid.');
        isValid = false;
    }

    if (phone === '') {
        displayError('phoneError', 'No. Telepon harus diisi.');
        isValid = false;
    } else if (!validatePhone(phone)) {
        displayError('phoneError', 'No. Telepon tidak valid.');
        isValid = false;
    }

    if (isValid) {
        displayOutput(name, age, email, phone);
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10,13}$/;
    return re.test(String(phone));
}

function displayOutput(name, age, email, phone) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Nama: ${name}</p>
        <p>Umur: ${age}</p>
        <p>Email: ${email}</p>
        <p>No. Telepon: ${phone}</p>
    `;
}
