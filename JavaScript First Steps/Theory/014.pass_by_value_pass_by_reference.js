// Primitive types - pass by value
// string, numbers, boolean itp

// let a = "hi";
// let b = a;
// b = b + " there";

// console.log(a); // hi
// console.log(b); // hi there

// Reference types - pass by reference
// array, functions, objects

// const myArray = ["a", "b"];

// function appendToArray(someArray) {
//   someArray.push("c");
//   return someArray;
// }

// console.log(appendToArray(myArray));
// console.log(myArray);

const x = { name: 'Andre'}
const y = { name: 'Andre'}
const z = x;

//Mental model
// x: 0x01
// y: 0x02
// z: x(0x01) => 0x01
// Zmiana wartości dla x bądź z spowoduje aktualizacje adresu pamięci 0x01
// stąd wartość będzie taka sama dla obu stałych.
