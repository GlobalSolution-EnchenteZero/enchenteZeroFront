
// Menu Hamburguer
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});



// Quiz redirecionamento
const quizButton = document.getElementById('quiz-btn');
if(quizButton){
  quizButton.addEventListener('click', () => {
    window.location.href = 'quiz.html';
  });
}

// Slideshow
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  if (slides.length > 0) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
}

setInterval(nextSlide, 5000);

// Troca de tema
const themeButtons = document.querySelectorAll('button[data-theme]');
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', btn.dataset.theme);
  });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Muda a cada 5 segundos
}

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

function plusSlides(n) {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  slides[slideIndex - 1].style.display = "block";
}
