// Select the form and input elements
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    // Validate Name
    const nameError = nameInput.nextElementSibling;
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.visibility = 'visible';
        nameInput.style.borderColor = 'red';
        isValid = false;
    } else if (nameInput.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        nameError.style.visibility = 'visible';
        nameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        nameError.style.visibility = 'hidden';
        nameInput.style.borderColor = '#6a11cb';
    }

    // Validate Email
    const emailError = emailInput.nextElementSibling;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.visibility = 'visible';
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email.';
        emailError.style.visibility = 'visible';
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailError.style.visibility = 'hidden';
        emailInput.style.borderColor = '#6a11cb';
    }

    // Validate Password
    const passwordError = passwordInput.nextElementSibling;
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        passwordError.style.visibility = 'visible';
        passwordInput.style.borderColor = 'red';
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordError.style.visibility = 'visible';
        passwordInput.style.borderColor = 'red';
        isValid = false;
    } else {
        passwordError.style.visibility = 'hidden';
        passwordInput.style.borderColor = '#6a11cb';
    }

    // Submit the form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset(); // Clear the form
    }
});
