document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a thank you message (you can extend this to send data to a server)
    document.getElementById('response').innerText = `Thank you for contacting us, ${email}! We will get back to you soon.`;
    
    // Clear the form
    this.reset();
});