const person = {
  firstName: "Krystian",
  "last-name": "Kapa",
  age: 25,
  hobbies: ["football", "programming", "dart", "gym"],
  address: {
    street: "Skrzydlewskiego",
    city: "Bielsko-Biała",
    country: "Poland",
  },
  howOldAmI: function () {
    console.log(`I am ${this.age} years old.`); // w obiekcie mogą być definiowane funkcje, this odwołanie do innej wartości obiektu
  },
};

console.log(person);
console.log(person.firstName);
console.log(person["last-name"]);

console.log(person.address.city);

person.hairColor = "black"; // dodawanie wartości do obiektu
delete person.address.street; // usuwanie wartości z obiektu

person.howOldAmI();

const groupOfPeople = [
  {
    name: "Joe",
    surname: "Doe",
  },
  {
    name: "Catrine",
    surname: "Doe",
  },
  {
    name: "Stefan",
    surname: "Doe",
  },
];

console.log(groupOfPeople);
