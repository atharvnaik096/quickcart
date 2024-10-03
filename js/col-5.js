document.getElementById('customerServiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message! We will get back to you soon.');
        // Here, you can send the form data to a backend service via AJAX or similar method.
        this.reset(); // Reset form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
