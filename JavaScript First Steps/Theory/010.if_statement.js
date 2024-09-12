const age = 18;
const drivingLicenseAge = 18;

if (age >= drivingLicenseAge) {
  console.log("Mogę zrobic prawo jazdy.");
} else {
  console.log("Jestem jeszcze zbyt młody.");
}

// Canada's grading system

const grade = 55;

if (grade >= 80) {
  console.log("Letter grade: A");
} else if (grade >= 70) {
  console.log("Letter grade: B");
} else if (grade >= 60) {
  console.log("Letter grade: C");
} else if (grade >= 50) {
  console.log("Letter grade: D");
} else {
  console.log("Letter grade: F");
}

// Instrukcja warunkowa przerywa dalsze sprawdzanie warunków po spełnieniu jednego z nich.

// Ternary operator => warunek ? co się dzieje jeśli true : co się dzieje jeśli false
// Działa to tylko w przypadku pojedynczych warunków, po porstu skrócony zapis if else'a
const money = 1000;
money > 500
  ? (answear = "Masz wystarczającą ilość pieniędzy")
  : (answear = "Nie masz kasy");

console.log(answear);
