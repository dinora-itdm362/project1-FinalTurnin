document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        // You can implement your signup logic here (e.g., send data to a server).
        alert(`Thank you, ${name}! You are now signed up with email ${email}.`);
    });
});