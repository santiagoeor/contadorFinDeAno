// const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
import './style.css';

const counter = document.getElementById('counter');
const carrusel = document.getElementById('carouselExampleIndicators');
const image = document.getElementById('image');
const segundos = document.getElementById('segundos');

segundos!.style.display = 'none';
image!.style.display = 'none';


// block
const getRemainTime = (deadline: string | Date) => {
  let now = new Date();
  let deadlineDate = new Date(deadline);

  let remainTime = (deadlineDate.getTime() - now.getTime() + 1000) / 1000;
  let remainSecods = ('0' + Math.floor(remainTime % 60)).slice(-2);
  let remainMinutes = ('0' + Math.floor(remainTime / 60) % 60).slice(-2);
  let remainHours = ('0' + Math.floor(remainTime / 3600) % 24).slice(-2);
  let remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSecods,
    remainMinutes,
    remainHours,
    remainDays
  }

}

const cuentaRegresiva = (deadline: string | Date) => {

  const timerUpdate = setInterval(() => {
    let time = getRemainTime(deadline);

    segundos!.innerHTML = time.remainSecods;

    counter!.innerHTML = `
    <div class="row">
    <div class="col-md-4 col-sm-1 col-1"></div>
    <div class="col-md-1 col-sm-1 col-2">${time.remainDays}<br> Dias</div>
    <div class="col-md-1 col-sm-1 col-3">${time.remainHours} <br> Horas </div>
    <div class="col-md-1 col-sm-1 col-3">${time.remainMinutes} <br> Minutos </div>
    <div class="col-md-1 col-sm-1 col-2">${time.remainSecods} <br> Segundos </div>
    <div class="col-md-2 col-sm-1 col-1"></div>
    </div>
    `;

    if (time.remainTime <= 6) {
      carrusel!.style.display = 'none';
      segundos!.style.display = 'block';
    }

    if (time.remainTime <= 1) {
      clearInterval(timerUpdate);
      segundos!.style.display = 'none';
      image!.style.display = 'block';
    }

  }, 1000);

}


cuentaRegresiva('Nov 30 2024 19:49:00 GMT-0500');
