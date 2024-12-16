import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

//create your delivery options
export const deliveryOptions = [{

id: '1',
deliveryDays: 7,
priceCents: 0
},
{
id: '2',
deliveryDays: 3,
priceCents: 499
},
{
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}
];


//create a function that lets you get your delivery option, just like the getProduct() function
export function getDeliveryOptions(deliveryOptionId) {
let deliveryOption;
deliveryOptions.forEach((option) => {
if (option.id === deliveryOptionId) {
deliveryOption = option;
}
});
return deliveryOption || deliveryOptions[0];
}



//checks if a delivery date falls on the weekend. Returns "true" if does, "false" otherwise
function isWeekend(date) {
const dayOfWeek = date.format('dddd');
return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}


//this function calculates the expected delivery date while excluding weekends
export function calculateDeliveryDates(deliveryOption) {
let remainingDays = deliveryOption.deliveryDays;
let deliveryDate = dayjs();

while (remainingDays > 0) {
deliveryDate = deliveryDate.add(1, 'day');

if (!isWeekend(deliveryDate)) {
remainingDays--;
}
}
const dateString = deliveryDate.format('dddd, MMMM, D');
return dateString;
}



export function validDeliveryOptions(deliveryOptionId) {
let found = false;

deliveryOptions.forEach((option) => {
if (option.id === deliveryOptionId) {
found = true;
}
});
return found;
}





