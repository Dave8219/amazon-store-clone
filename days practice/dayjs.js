import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isSatSun from './weekendDays.js';



console.log(dayjs());


const today = dayjs();

const addDays = today.add(5, 'days');
console.log(addDays.format('MMMM D'));


const monthAdd = today.add(1, 'month');
console.log(monthAdd.format('MMMM D, YYYY'));


const monthSubtract = today.subtract(1, 'month');
console.log(monthSubtract.format('MMMM D, YYYY'));

console.log(today.format('dddd'));

isSatSun();

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));












    




