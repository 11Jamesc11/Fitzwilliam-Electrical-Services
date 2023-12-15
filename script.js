document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('top-nav');
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            if (document.getElementById(this.getAttribute('href').substring(1))) {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic 'Call Us Now' Button
    const callUsButton = document.querySelector('.call-us-button');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Change 100 to the threshold you want
            callUsButton.classList.add('highlight');
        } else {
            callUsButton.classList.remove('highlight');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation











document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submit

        // Perform validation (can be expanded as needed)
        if (validateForm()) {
            // AJAX form submission
            submitForm();
        }
    });
});

function validateForm() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !number || !email || !message) {
        updateStatus('Please fill in all fields.', 'error');
        return false;
    }

    // Add more specific validations (email format, number format, etc.) here if needed

    return true;
}

function submitForm() {
    var formData = new FormData(document.getElementById('contact-form'));

    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            updateStatus('Thank you for your message. We will get back to you soon!', 'success');
        } else {
            updateStatus('An error occurred. Please try again.', 'error');
        }
    })
    .catch(error => {
        updateStatus('An error occurred. Please try again.', 'error');
    });
}

function updateStatus(message, status) {
    var statusDiv = document.getElementById('form-status');
    statusDiv.textContent = message;
    statusDiv.className = status; // Use this class to style your message (e.g., color)

}





