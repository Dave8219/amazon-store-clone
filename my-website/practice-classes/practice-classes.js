

class Fruit {
    id;
    image;
    name;
    quantity;
    pricePerUnit;

constructor(fruitDetails) {
this.id = fruitDetails.id;
this.image = fruitDetails.image;
this.name = fruitDetails.name;
this.quantity = fruitDetails.quantity;
this.pricePerUnit = fruitDetails.pricePerUnit;

}

totalCost() {
    return this.quantity * this.pricePerUnit;
}

displayInfo() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price Per Unit: ${this.pricePerUnit}, Total Cost: $${this.totalCost().toFixed(2)}`)
}


}


const fruits = [{
        id: "1",
        image: "images/bananas.jpg",
        name: "Bananas",
        quantity: 1,
        pricePerUnit: 0.5
},
{
    id: "2",
    image: "images/oranges.jpg",
    name: "Oranges",
    quantity: 1,
    pricePerUnit: 0.8
},

{
    id: "3",
    image: "images/pineapple.jpg",
    name: "Pineapple",
    quantity: 1,
    pricePerUnit: 3.0

},

{
    id: "4",
    image: "images/cherries.jpg",
    name: "Cherries",
    quantity: 1,
    pricePerUnit: 0.2
}

].map((fruit) => {
    return new Fruit(fruit); 
});

/*shorthand for method - returns instance
.map((fruit) => new Fruit(fruit));
*/


/*
const banana = new Fruit(fruitDetails);
const oranges = new Fruit(fruitDetails);
const pineapple = new Fruit(fruitDetails);
const cherries = new Fruit(fruitDetails);
*/

//const fruits = [banana, oranges, pineapple, cherries];

/*fruits.forEach((fruit) => {
fruit.displayInfo();
console.log(fruit.displayInfo());
});
*/

/*
console.log(fruits);
console.log(`${banana.name} $${banana.totalCost().toFixed(2)}`);
*/
/*messier code to multiply or add etc...
console.log(`${banana.name}:`, banana.quantity * banana.pricePerUnit);
*/

/*
let renderHTML = '';

renderHTML = `<img src="${banana.image}" class="banana-image">`;

document.querySelector('.js-fruit-container').innerHTML = renderHTML;
*/


let renderFruits = '';
fruits.forEach((fruit) => {
    renderFruits += `
    <div>
    <img class="my-fruits" src="${fruit.image}">
    <p>${fruit.name}</p>
    </div>`;
});


document.querySelector('.js-fruits-container').innerHTML = renderFruits;



