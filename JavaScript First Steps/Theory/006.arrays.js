const people = ["Ander", "Marry", "John"];
const numbers = [1, 4, 5, 6];
const mixed = [
  "A string",
  32,
  true,
  { name: "Krystian" },
  null,
  undefined,
  [1, 3, 4],
];

// console.log(mixed);
// console.log(people.length); // zwraca liczbę elementów tablicy
// people.push('Chris');
// console.log(people);
// const chris = people.pop(); // usuwa ostatni element tablicy i zwraca go
// console.log(people);
// console.log(chris);

// numbers[2] = 32;
// console.log(numbers);
// można zmienić pojedynczą wartość przechowywaną w tablicy przypisaną do stałej,
// ale nie można przypisać do niej innej tablicy

people.unshift("Joe"); // dodaje nowy element na początku tablicy
people.shift(); // usuwa pierwszy element tablicy i zwraca go

console.log(people.includes("John")); // określa czy podany element znajduje się w tablicy
console.log(people.indexOf("Ander")); // zwraca index wskazanego elementu, jeśli brak zwraca -1

const joinedArray = people.concat(numbers); // łączy ze sobą dwie tabele
console.log(joinedArray);
