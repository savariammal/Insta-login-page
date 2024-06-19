document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!username || !password) {
        errorMessage.textContent = 'Phone number, username, and password are required.';
        return;
    }

    if (!isValidEmail(username) && !isValidPhoneNumber(username)) {
        errorMessage.textContent = 'Please enter a valid email or phone number.';
        return;
    }

    // If validation passes, you can submit the form or do whatever you need here
    errorMessage.textContent = '';
    alert('Form submitted successfully!');
    // Uncomment the following line to submit the form
    // this.submit();
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function isValidPhoneNumber(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
