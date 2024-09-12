console.log(`${add(312, 31)} . 'użycie funkcji przed jej deklaracją`);

// Function declaration
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// console.log(adding(312312, 2)); // Cannot access 'adding' before initialization

// Function expression (wyrażenie funkcyjne -> funkcja anonimowa przypisana do zmiennej)
const adding = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

// Hoisting w JavaScript to mechanizm, który sprawia, że deklaracje zmiennych
// i funkcji są "przenoszone" na początek swojego zakresu(scope) podczas fazy kompilacji,
// zanim kod zostanie wykonany.
// Dzięki hoistingowi można używać zmiennych i funkcji przed ich zadeklarowaniem w kodzie.

// IIFE - Immediately Invokable Function Expression
(function (num1, num2) {
  let sum = num1 + num2;
  return sum;
})(3213, 22);

// Arrow function - skrócony zapis wyrażenia funkcyjnego
// typ i nazwa wyrażenia = argumenty => return

const hello = (name) => `Hello ${name}`;
console.log("Alice");

const add2 = (num1, num2) => num1 + num2;
console.log(add2(4, 4));

//----------------------------------------------------------------------------------------------
// Callback function - funkcja przekazywana jako argument do drugiej funkcji.

/* Pobiera pierwszy element HTML typu <button> znajdujący się na stronie
i przypisuje go do zmiennej button.

document reprezentuje całe drzewo DOM (Document Object Model) strony internetowej,
a querySelector() to metoda, która zwraca pierwszy pasujący element w dokumencie
(w tym przypadku, pierwszy przycisk).
*/
const button = document.querySelector("button");

/*
Ta linia tworzy funkcję anonimową przypisaną do zmiennej greeting.
Funkcja nie przyjmuje żadnych argumentów
i po prostu wypisuje w konsoli tekst "Hello there!" za pomocą console.log().
*/
const greeting = function () {
  console.log("Hello there!");
};

/*
button.addEventListener("click", greeting): Metoda addEventListener() dodaje "nasłuchiwacza" zdarzeń
do elementu button.
Zdarzeniem, którego nasłuchuje ta funkcja, jest click, czyli kliknięcie myszką na przycisk.
Funkcja greeting zostanie wywołana za każdym razem, gdy użytkownik kliknie przycisk.
Jest przekazywana jako tzw. callback do obsługi zdarzenia.
*/
button.addEventListener("click", greeting); //funkcje greeting przekazujemy bez (), ponieważ wywołałaby sie natychmiast, a nie po kliknięciu przycisku
//-------------------------------------------------------------------------------------------------

const paragraph = document.querySelector('p');
paragraph.addEventListener("dblclick", () => console.log('Focusing...'));
