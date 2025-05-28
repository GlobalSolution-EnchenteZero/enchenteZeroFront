//FORMULARIO

const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = '2px solid var(--danger)';
      } else {
        input.style.border = '';
      }
    });

    if (valid) {
      alert('Formulário enviado com sucesso!');
      contactForm.reset();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios!');
    }
  });

//QUIZ
const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');

quizForm.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const formData = new FormData(quizForm);
  let totalQuestions = 10;

  formData.forEach((value) => {
    if (value === 'correta') score++;
  });

  quizResult.innerHTML = `<h3>Você acertou ${score} de ${totalQuestions} perguntas.</h3>`;
});

