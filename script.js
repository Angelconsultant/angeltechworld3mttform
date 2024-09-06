function submitForm() {
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if the fields are not empty
    if (name && email) {
        // Display a message
        document.getElementById('message').innerHTML = `
            <p>Thank you, <strong>${name}</strong>! Your email, <strong>${email}</strong>, has been received.</p>
        `;
    } else {
        // Display an error message
        document.getElementById('message').innerHTML = `
            <p style="color: red;">Please fill in all fields.</p>
        `;
    }
}