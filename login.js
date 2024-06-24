document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const identificationNumber = document.getElementById('identificationNumber').value;
    const password = document.getElementById('password').value;

    // Simulate login validation; 
    if (validateCredentials(identificationNumber, password)) {
        // Assuming successful login, store user details in local storage
        Store.setUser({ identificationNumber: identificationNumber });

        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard
    } else {
        alert('Invalid identification number or password');
    }
});

function validateCredentials(identificationNumber, password) {
    // Placeholder function for credential validation
    // Implement actual logic to check credentials against a database or authentication service
    return identificationNumber === "123456" && password === "password"; // Example validation
}
