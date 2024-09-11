const firstName = "Krystian";
const lastName = "Kapa";
const jobTitle = `PHP Dev`;

const storeName = "Andre's \"Special\" IT\\Dev ";

const person = `${firstName} ${lastName} is a ${jobTitle}`;

const html = `
<div>
    My name is ${firstName}
</div>`;

console.log(person);
console.log(firstName.length); // 8
console.log(firstName[0]); // K
console.log(firstName.charAt(1)); // r
console.log(firstName.toLowerCase()); // krystian
console.log(firstName.toUpperCase()); // KRYSTIAN
console.log(firstName.substring(0, 5)); // Kryst
console.log(firstName.includes('Kryst')); // true
/*
W JavaScript istnieje jeden typ danych string, który reprezentuje ciąg znaków. Różne sposoby zapisywania stringów 
i metody pracy z nimi umożliwiają elastyczne operowanie tekstem.

1. Stringi w cudzysłowach (klasyczne stringi)
a) Pojedyncze cudzysłowy (')
Używane do tworzenia łańcuchów znaków, gdzie pojedynczy cudzysłów nie musi być specjalnie ucieczony.

b) Podwójne cudzysłowy (")
Używane podobnie jak pojedyncze, ale z możliwością unikania podwójnych cudzysłowów w tekście.

c) Backticki (`) - Template Literals
Pozwalają na interpolację zmiennych i wieloliniowe stringi. Używane z backtickami, umożliwiają także wstawianie wyrażeń w ciągu znaków.

2. Obiekt typu String
Stringi w JavaScript mogą być także tworzone jako obiekty za pomocą konstruktora String, chociaż zazwyczaj korzysta się z bezpośredniego zapisu stringów.
Obiekt String posiada wiele wbudowanych metod do manipulacji tekstem, takich jak zmiana wielkości liter, wycinanie fragmentów czy zamiana znaków.

3. Interpolacja stringów
W przypadku stringów tworzonych za pomocą backticków możliwe jest wstawianie zmiennych i wyrażeń bez potrzeby ręcznego łączenia stringów, co czyni je bardziej elastycznymi.

4. Multiliniowe stringi
Za pomocą backticków (template literals) możliwe jest tworzenie wieloliniowych stringów, co jest przydatne w bardziej złożonych operacjach na tekstach.

Wszystkie te formy stringów są powszechnie stosowane w zależności od potrzeb, a JavaScript zapewnia szerokie możliwości manipulowania nimi.
*/
