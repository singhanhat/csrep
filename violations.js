document.addEventListener('DOMContentLoaded', function() {
    // Ensure example data is initialized
    Store.initExampleViolations();

    // Load violations from local storage
    const violations = Store.getViolations();
    const tbody = document.getElementById('violationsTable').getElementsByTagName('tbody')[0];
    violations.forEach(violation => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${violation.registrationNumber}</td>
            <td><a href="${violation.videoUrl}" target="_blank">View Video</a></td>
            <td>${violation.timestamp}</td>
            <td>
                <button class="verify-button" onclick="verifyViolation(${violation.id})">Yes</button>
                <button class="dismiss-button" onclick="dismissViolation(${violation.id})">No</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
});

function verifyViolation(id) {
    Store.verifyViolation(id);
    window.location.reload(); // Refresh the page to reflect changes
}

function dismissViolation(id) {
    Store.dismissViolation(id);
    window.location.reload(); // Refresh the page to reflect changes
}
