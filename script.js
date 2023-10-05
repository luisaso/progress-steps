const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

const nextStep = () => {
  if (currentActive < circles.length) {
    currentActive++;
  }
  update();
}

const prevStep = () => {
  if (currentActive > 1) {
    currentActive--;
  }
  update();
}

let currentActive = 1;
next.addEventListener('click', () => nextStep());
prev.addEventListener('click', () => prevStep());

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    }
    else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');
  const progressBar = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = progressBar + '%';

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
  
}