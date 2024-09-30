class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;
    
    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }


    displayInfo() {

        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
       console.log(`${this.#brand} ${this.#model} ${this.speed} km/h, Trunk: ${trunkStatus}`);

    }

go() {
    if (!this.isTrunkOpen) {
        this.speed += 5;
    }
}


brake() {
    this.speed -= 5;
    if(this.speed < 0) {
    this.speed = 0;
    }
    }


openTrunk() {
    
if (this.speed === 0) {
this.isTrunkOpen = true;
}

}

closeTrunk() {
        this.isTrunkOpen = false;

}
}

class Racecar extends Car {
acceleration;

constructor(carDetails) {
super(carDetails);
this.acceleration = carDetails.acceleration;
}
go() {
this.speed += this.acceleration;
if (this.speed > 300) {
this.speed = 300;
}
}
openTrunk() {
console.log('race cars do not have trunks');
}

closeTunk() {
console.log('race cars do not have trunks');
}
}



const myCar1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});

const myCar2 = new Car({
brand: 'Tesla',
model: 'Model 3'
});


console.log(myCar2);

myCar1.go();
myCar1.go();
myCar1.go();
myCar2.go();
myCar2.go();
myCar1.brake();
myCar1.brake();
myCar1.brake();

myCar1.displayInfo();
myCar2.displayInfo();
myCar1.openTrunk();
myCar2.openTrunk();
myCar1.displayInfo();
myCar2.displayInfo();


const raceCar = new Racecar({
brand: 'McLaren',
model: 'F1',
acceleration: 20
});

myCar2.displayInfo();
raceCar.go();
raceCar.displayInfo();
raceCar.go();
raceCar.go();
raceCar.brake();
raceCar.brake();
raceCar.displayInfo();
myCar2.go();
myCar2.go();
myCar2.brake();
myCar2.brake();
myCar2.displayInfo();











