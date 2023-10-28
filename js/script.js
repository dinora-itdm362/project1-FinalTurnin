document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Thanks, ${name}! You are now signed up with email ${email}.`);
    });
});
function validateEmail(input) {
    const email = input.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errorElement = document.getElementById('email-error');
  
    if (!email.match(emailPattern)) {
      errorElement.textContent = 'Please enter a valid email address';
    } else {
      errorElement.textContent = '';
    }
  }