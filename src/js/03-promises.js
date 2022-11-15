import Notiflix from 'notiflix';

const formDelay = document.querySelector('input[name=delay]');
const formStep = document.querySelector('input[name=step]');
const formAmount = document.querySelector('input[name=amount]');
const submitBtn = document.querySelector('button[type=submit]');





submitBtn.addEventListener('click', formSubmit);
submitBtn.disabled = false;
function formSubmit() {
  event.preventDefault();
  let position = 1;
  let delayVal = Number(formDelay.value);
  let stepVal =  Number(formStep.value);
  let amountVal = Number(formAmount.value);
 
  submitBtn.disabled = true;

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal);
    delayVal += stepVal;
    position += 1;
  }
   
  console.log(delayVal); 
  
 };

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
    
      }
    }, delay);
 
  });
promise.then(({ position, delay }) => {
                Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
            });
    
};


