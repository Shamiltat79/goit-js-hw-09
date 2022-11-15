import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



console.log(Notiflix);



class CountdownTimer {
  constructor({ element, options, notiflix }) {
    this.element = element;
    this.options = options;
    this.notiflix = notiflix;

    this.startBtn = document.querySelector('[data-start]');
    this.startBtn.disabled = true;
    // 
    this.listenEvents()
  }

  // Initialization flatpickr lib with: element '#datetime-picker', options

  init() {
    this.options.onClose = this.onClose.bind(this);
    flatpickr(this.element, this.options);
  }
  listenEvents() {
    this.startBtn.addEventListener('click', this.showTimer.bind(this));
   
  }


    onClose(selectedDates) {
      this.selectedDate = Date.parse(selectedDates[0]);
      
     
        this.showMessage(this.isFutureDate());
        this.startBtn.disabled = !this.isFutureDate();
        this.showNotifyMessage;
  }
  
  isFutureDate() {
    return Date.now() < this.selectedDate;
  }


    showMessage(isFutureDate) {
        if (isFutureDate) {
            this.notiflix.Notify.success('Is future date');

            return;
        }

        this.notiflix.Notify.failure('Is not future date');
  }
  showTimer() {
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const intervalID = setInterval(() => { 
     
  let timeLeft = this.convertMs(this.selectedDate - Date.now()); 
  // console.log(timeLeft);
  const diffData = this.selectedDate - Date.now();
  // console.log(diffData);
   if (diffData < 1000) {
      clearInterval(intervalID);
    }
  this.startBtn.disabled = true;
      
   days.innerHTML = this.addLeadingZero(timeLeft.days);
   hours.innerHTML = this.addLeadingZero(timeLeft.hours);
   minutes.innerHTML = this.addLeadingZero(timeLeft.minutes);
   seconds.innerHTML = this.addLeadingZero(timeLeft.seconds);
}, 1000);
   
   

  }

  convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
  
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
addLeadingZero(value) {
        return value.toString().padStart(2, 0);
    }
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1
};

// Create instance of CountdownTimer class

const countdownTimer = new CountdownTimer({ element: '#datetime-picker', options, notiflix: Notiflix});

countdownTimer.init();









