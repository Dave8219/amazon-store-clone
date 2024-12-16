export const fruits = [{
    id: '1',
    name: 'orange',
    images: "images/oranges.jpg",
    priceCents: 499
},
    {id: '2',
    name: 'banana',
    images: "images/bananas.jpg",
    priceCents: 299
},
    {
        id: '3',
    name: 'pineapple',
images: "images/pineapple.jpg",
priceCents: 599
},
    {
        id: '4',
    name: 'cherry',
images: "images/cherries.jpg",
priceCents: 799
}
]; 


//this reverses the array
for (let i = fruits.length - 1; i >= 0; i--) {
console.log(fruits[i]);
}

//this outputs the array
for (let i = fruits.length; i <= 4; i++) {
console.log(fruits);
}
console.log(fruits[2]);



/*<li>${fruits[0].name} <input type="number" class="js-quantity-selector-${fruits[0].id}" value="1"></li>
    <li>${fruits[1].name} <input type="number" class="js-quantity-selector-${fruits[1].id}" value="1"></li>
    <li>${fruits[2].name} <input type="number" class="js-quantity-selector-${fruits[2].id}" value="1"></li>
    <li>${fruits[3].name} <input type="number" class="js-quantity-selector-${fruits[3].id}" value="1"></li>
*/



//this finds the product
export function getProduct(fruitId) {
    let matchingFruit;

    fruits.forEach((fruit) => {
    if (fruit.id === fruitId) {
    matchingFruit = fruit;
    }
    });
    return matchingFruit;
}
