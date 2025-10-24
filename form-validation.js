/* ========================================
 Aigralys.ai - Form Validation and Submission
======================================== */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Custom error messages
  const errorMessages = {
    'name': {
      'es': 'Por favor ingresa un nombre válido',
      'en': 'Please enter a valid name'
    },
    'email': {
      'es': 'Por favor ingresa un email válido',
      'en': 'Please enter a valid email address'
    },
    'message': {
      'es': 'Por favor ingresa un mensaje de al menos 10 caracteres',
      'en': 'Please enter a message with at least 10 characters'
    }
  };

  // Add error messages to DOM
  form.querySelectorAll('.form-group').forEach(group => {
    const input = group.querySelector('input, textarea');
    if (!input) return;

    const errorSpan = group.querySelector('.error-message');
    if (!errorSpan) return;

    const fieldName = input.getAttribute('name');
    if (!fieldName || !errorMessages[fieldName]) return;

    errorSpan.textContent = errorMessages[fieldName][currentLang || 'es'];
  });

  // Form submission handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success message
        const successMessage = currentLang === 'en' 
          ? 'Thank you! We\'ll get back to you soon.'
          : '¡Gracias! Nos pondremos en contacto pronto.';
        
        form.innerHTML = `<div class="success-message">${successMessage}</div>`;
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      // Error message
      const errorMessage = currentLang === 'en'
        ? 'Sorry, there was a problem. Please try again later.'
        : 'Lo sentimos, hubo un problema. Por favor intenta más tarde.';
      
      submitButton.textContent = errorMessage;
      submitButton.classList.add('error');

      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalButtonText;
        submitButton.classList.remove('error');
        submitButton.disabled = false;
      }, 3000);
    }
  });

  // Real-time validation
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value) {
        input.classList.add('touched');
      }
    });
  });
});