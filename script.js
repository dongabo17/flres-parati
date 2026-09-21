const button = document.querySelector('#surpriseButton');
const surprise = document.querySelector('#surprise');
const petalsContainer = document.querySelector('.petals');

button.addEventListener('click', () => {
  const isVisible = surprise.classList.toggle('show');
  surprise.setAttribute('aria-hidden', String(!isVisible));
  button.setAttribute('aria-expanded', String(isVisible));
  button.querySelector('span:first-child').textContent = isVisible
    ? 'Ocultar sorpresa'
    : 'Presiona para una sorpresa';
  button.querySelector('.button-icon').textContent = isVisible ? '💛' : '✨';

  if (isVisible) {
    createPetals(20);
    setTimeout(() => surprise.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
  }
});

function createPetal() {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.textContent = Math.random() > .35 ? '✦' : '🌼';
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.fontSize = `${.7 + Math.random() * .8}rem`;
  petal.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
  petal.style.animationDuration = `${4 + Math.random() * 4}s`;
  petalsContainer.appendChild(petal);
  petal.addEventListener('animationend', () => petal.remove());
}

function createPetals(amount) {
  for (let i = 0; i < amount; i += 1) setTimeout(createPetal, i * 90);
}

setInterval(createPetal, 1800);
