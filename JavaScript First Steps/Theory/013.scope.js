//Global scope
// let message = "variable making by let";
// var greeting = "variable making by var";

// console.log(message);
// console.log(greeting);

// Zakres globalny daje dostęp do zmiennej z dowolnego miejsca w kodzie.
// Zmienne definiowane przy pomocy var są widoczne w Window Object, let nie są.

// Function Scope

// function hello() {
//   let message = "variable making by let";
//   var greeting = "variable making by var";

//   return message;
// }

// hello();
// // console.log(message); // ReferenceError: message is not defined - zmienna widoczna tylko w funkcji hello
// let returnValue = hello();
// console.log(returnValue);

// function sayHello() {
//   let message = "variable making by let";
//   var greeting = "variable making by var";

//   console.log(message);
//   console.log(greeting);

//   function nested() {
//     let nestedMessage = "variable making by let";
//     var nestedGreeting = "variable making by var nested";

//     return nestedGreeting;
//   }

//   return nested();
// }

// console.log(sayHello());

// Block Scope

// if (true) {
//   let message = "variable making by let";
//   var greeting = "variable making by var";

//   console.log(message);
//   console.log(greeting);
// }

// console.log(message); // użycie let do definicji zmiennej w bloku (if/switch/loop) nie daje jej widoczności poza blokiem
// console.log(greeting); // użycie var do definicji zmiennej w bloku (if/switch/loop) daje widoczność na zewnątrz

// Przy definiowaniu zmiennych powinno używać się tylko let albo const właśnie ze względu problemów
// jakie mogą wywołać zdefiniowane przy pomocy var zmienne. Zdefinowanie zmiennej przy użyciu var
// i nadanie jej nazwy takiej samej jak funkcje wbudowane w JS, spowoduje brak możliwość użycia
// tej funkcji ze względu na konflikt nazw.

// (function () {
//   const alert = "error";
//   console.log(alert);
// })();

// alert("hi");
