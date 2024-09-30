/*
let cart = 0;
function cart1() { 
cart += 1;
console.log(`Items in cart: ${cart}`);
}
cart1();
cart1();
cart1();
*/





function voting(age, gender) {
    if (age <= 17) {
    console.log('cannot vote');
    console.log(age, gender);
    }
    else if (age >= 18) {
    console.log('you can vote');
    console.log(age, gender);
    }
    return age;
    }
    voting(18, 'male');
    
    
    const items = {
    milk: 599,
    water: 299,
    beer: 1299,
    brisket: 5099
    };
    console.log(items.milk);
    
    
    /*Wed - work on iterating through the groceries list
    function getProduct(productId) {
        let matchingProduct;
    
        products.forEach((product) => {
        if (product.id === productId) {
        matchingProduct = product;
        }
        });
        return matchingProduct;
    }
    */
    const groceries = [{
        milk: 599,
        water: 299,
        beer: 1299,
        brisket: 5099
        },
    {
    produce: 'vegetables',
    tomatoes: 4,
    bellPeppers: 2,
    }
    
    ];
        
        console.log(groceries.water);




//.map() method practice

        const numbers = [1, 2, 3, 4, 5];

        const squares = numbers.map(square);

        console.log(squares);

        function square(element) {
            return Math.pow(element, 2);
        }

//returning index positions instead values - transforming to numbers
        const letters = ['a', 'b', 'c', 'd', 'e'];
        console.log(letters);

        const numbersTransform = letters.map(transform);

        console.log(numbersTransform);
        function transform(element, index) {
            return index;
        }

//transfomring values to all upperCase
        const students = ['Spongebob', 'Patrick', 'Squidward', 'Sandy'];
        console.log(students);
        console.log(students.length);

        const studentsUpper = students.map(upperCase); 
        console.log(studentsUpper);
        function upperCase(element) {
            return element.toUpperCase();
        }
//.map() method transforms the string values in the students array to lowerCase
        const studentsLower = students.map(lowerCase); 
        console.log(studentsLower);
        function lowerCase(element) {
        return element.toLowerCase();
        }


        const dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
        const formattedDates = dates.map(formatDates);
        console.log(formattedDates);
        function formatDates(element) {
            const parts = element.split('-');
            return `${parts[1]}/${parts[2]}/${parts[0]}`;
        }
        

        //.forEach() method practice


        let myNumbers = [1, 2, 3, 4, 5];
        //myNumbers.forEach(double);
        //myNumbers.forEach(triple);
        myNumbers.forEach(mySquare);
            myNumbers.forEach(display);
        function display(element) {
            console.log(element);
        }

        function double(element, index, array) {
            array[index] = element * 2;
            
        }

        function triple(element, index, array) {
            array[index] = element * 3;
            
        }

        function mySquare(element, index, array) {
            array[index] = Math.pow(element, 2);
        }


let fruits = ["apple", "orange", "banana", "coconut"];
fruits.push("peach");
//fruits.forEach(fruitsToUpperCase);
fruits.forEach(capitalizeFruits);
fruits.forEach(myDisplay);
console.log(fruits.length);


function fruitsToUpperCase(element, index, array) {
array[index] = element.toUpperCase();
}


function capitalizeFruits(element, index, array) {
array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function myDisplay(element) {
console.log(element);
}



/*const myObject3 = {
    name: "David",
    age: "42",
    weight: (myWeight) => {
        myWeight;
      console.log(myWeight);
      return myWeight  
    }
}
console.log(myObject3.weight('140'));
*/


    function getMyProduct(itemId) {
        let matchingProd;

        myProducts.forEach((item) => {
            if (item.id === itemId) {
        matchingProd = item;
            }
        });
        return matchingProd
                }


            const myProducts = [
        {
            id: "1",
            name: "shirt"
        },
        {
        id: "2",
        name: "jeans" 
        }]

        console.log(myProducts);
        console.log(getMyProduct("2"));





    


