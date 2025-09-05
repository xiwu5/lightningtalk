document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const formFields = {
            name: document.querySelector('#name').value.trim(),
            email: document.querySelector('#email').value.trim(),
            message: document.querySelector('#message').value.trim()
        };

        // Simple regex for email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(formFields.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        for (const field in formFields) {
            if (formFields[field] === '') {
                alert(`The ${field} field is required.`);
                return;
            }
        }

        // If all validations pass
        alert('Thank you for your message, ' + formFields.name + '! I will get back to you shortly.');

        // Reset the form
        contactForm.reset();
    });
});
