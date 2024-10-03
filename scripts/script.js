document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('successMessage');

    // Validación de campos
    let valid = true;

    if (nameInput.value.length < 3) {
        nameInput.nextElementSibling.style.display = 'block';
        valid = false;
    } else {
        nameInput.nextElementSibling.style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.nextElementSibling.style.display = 'block';
        valid = false;
    } else {
        emailInput.nextElementSibling.style.display = 'none';
    }

    // Si todos los campos son válidos
    if (valid) {
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('hidden');
            nameInput.value = '';
            emailInput.value = '';
        }, 3000);
    }
});
   