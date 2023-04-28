//isNaN
console.log(isNaN("Hola"));
console.log(isNaN(5));

//isInteger
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.25));

// parseInt
console.log(parseInt("5")); // 5
console.log(parseInt("  55  ")); // 55
console.log(parseInt("5  55")); // 5

const numberRandom = ["5", "65"];
console.log(parseInt(numberRandom)); // 5

// parseFloat
console.log(parseFloat("2342.32525"));

// toString
const number = 45.3543245;
console.log(number.toString());
