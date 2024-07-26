document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const name = document.getElementById('Mobile').value;
    const name = document.getElementById('Address').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}. Your message has been sent! & give u respsonse as soon as possible`);

    // Optionally, add code to actually send the form data to a server here
});
