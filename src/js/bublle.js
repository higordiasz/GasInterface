const waterDiv = document.querySelector('.water');
const waterDiv2 = document.querySelector('#tank2');
const waterDiv3 = document.querySelector('#tank3');
const waterDiv4 = document.querySelector('#tank4');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  waterDiv.appendChild(bubble);

  const position = Math.random() * 100;
  bubble.style.left = `${position}%`;
  bubble.style.top = '150px';

  bubble.addEventListener('animationend', () => {
    waterDiv.removeChild(bubble);
  });
}

function createBubble2() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble2');
  waterDiv2.appendChild(bubble);

  const position = Math.random() * 100;
  bubble.style.left = `${position}%`;
  bubble.style.top = '150px';

  bubble.addEventListener('animationend', () => {
    waterDiv2.removeChild(bubble);
  });
}

function createBubble3() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble3');
  waterDiv3.appendChild(bubble);

  const position = Math.random() * 100;
  bubble.style.left = `${position}%`;
  bubble.style.top = '150px';

  bubble.addEventListener('animationend', () => {
    waterDiv3.removeChild(bubble);
  });
}

function createBubble4() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble4');
  waterDiv4.appendChild(bubble);

  const position = Math.random() * 100;
  bubble.style.left = `${position}%`;
  bubble.style.top = '150px';

  bubble.addEventListener('animationend', () => {
    waterDiv4.removeChild(bubble);
  });
}

setInterval(createBubble, 600);
setInterval(createBubble2, 700);
setInterval(createBubble3, 900);
setInterval(createBubble4, 750);
