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

