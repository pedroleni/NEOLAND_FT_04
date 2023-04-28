const persona = {
  name: "Pepe",
  edad: 90,
}

class Superheroe {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  attack() {
    return `${this.name} está atacando!`
  }
}

const Spiderman = new Superheroe("Peter Parker", 25)
console.log(Spiderman)
console.log(Spiderman.attack())

const Daredevil = new Superheroe("Matt Murdock", 38)
console.log(Daredevil)
console.log(Daredevil.attack())

//Herencia
class Vehicle {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  move() {
    return `${this.name} se está moviendo`
  }
}

class Car extends Vehicle {
  constructor(name, color, doors) {
    super(name, color)
    this.doors = doors
    this.wheels = 4
  }

  handBrake() {
    return `${this.name} ha echado el freno de mano`
  }
}

const SeatPanda = new Car("Seat Panda", "Rojo", 4)
console.log(SeatPanda)
console.log(SeatPanda.handBrake())
console.log(SeatPanda.move())

class Plane extends Vehicle {
  constructor(name, color, wings) {
    super(name, color)
    this.wings = wings
  }

  fly() {
    return `${this.name} está volando`
  }
}

const Boeing = new Plane("Boeing", "Blanco", 2)
console.log(Boeing)
console.log(Boeing.move())
console.log(Boeing.fly())
