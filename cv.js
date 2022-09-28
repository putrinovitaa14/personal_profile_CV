const start = new Date('2022-09-07');
const now = new Date();

const currentInternDuration = now - start;

const months = Math.floor(((currentInternDuration / 1000 ) / 86400) / 30);
let days = Math.floor((currentInternDuration / 1000 ) / 86400) - (months * 30);
days = days < 0 ? 0 : days;

document.querySelector('.month').innerText = months;
document.querySelector('.day').innerText = days;
