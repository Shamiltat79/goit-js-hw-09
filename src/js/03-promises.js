import Notiflix from 'notiflix';

const formDelay = document.querySelector('input[name=delay]');
const formStep = document.querySelector('input[name=step]');
const formAmount = document.querySelector('input[name=amount]');
const submitBtn = document.querySelector('button[type=submit]');





submitBtn.addEventListener('click', formSubmit);
 
function formSubmit() {
  event.preventDefault();
  let position = 0;
  let delayVal = formDelay.value;
  let stepVal =  formStep.value;
  let amountVal = formAmount.value;

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal);
    delayVal += stepVal;
    position += 1;
  }
   
   
  
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
    }, );
 
  });
promise.then(({ position, delay }) => {
                Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
            });
    
};


