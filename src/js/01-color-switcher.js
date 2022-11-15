const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

startBtn.addEventListener('click', changeColorStart);
stopBtn.addEventListener('click', changeColorStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; 

function changeColorStart() {
    startBtn.setAttribute('disabled', 'disabled')
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}
function changeColorStop() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');
};
