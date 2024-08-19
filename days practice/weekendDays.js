import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


//function renamed in dayjs.js as isSatSun
export default function isWeekend(date) {
    date = dayjs();
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';  
  }