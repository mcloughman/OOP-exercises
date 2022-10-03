class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    const { make, model, year } = this;
    return `The vehicle is a ${make} ${model} from ${year}`;
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

class Garage {
  // since we know vehicles is going to always going to be instantiated as an empty array, there's no need to pass it in as a param
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  // it seems to me that we have to add a parameter to the method. And we use the instanceof operator to see if it is a Vehicle
  add(obj) {
    const { vehicles, capacity } = this;
    if (obj instanceof Vehicle === false) {
      return "Only vehicles are allowed in here!";
    } else if (vehicles.length >= capacity) {
      return "Sorry, we're full";
    }
    vehicles.push(obj);
  }
}

let myFirstGarage = new Garage(3);
