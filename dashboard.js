document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in
    const user = Store.getUser();
    if (!user) {
        // Redirect to login if no user is found in local storage
        window.location.href = 'login.html';
        return;
    }

    // Handle button clicks to navigate to different parts of the application
    document.getElementById('verifyViolationsBtn').addEventListener('click', function() {
        window.location.href = 'verify-violations.html';
    });

    document.getElementById('controlLightsBtn').addEventListener('click', function() {
        window.location.href = 'control-timers.html';
    });
});
