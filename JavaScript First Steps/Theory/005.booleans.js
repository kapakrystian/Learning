/*
W JavaScript typ danych Boolean reprezentuje dwie wartości logiczne: true (prawda) i false (fałsz).
Typ ten jest używany głównie do kontrolowania przepływu programu oraz do oceny warunków w wyrażeniach logicznych.

1. Tworzenie wartości Boolean
a) Bezpośrednie wartości:
Najprostszy sposób tworzenia wartości Boolean to przypisanie jednej z dwóch wartości: true lub false.

b) Operatory logiczne i porównania:
Wartości Boolean często wynikają z operacji porównania lub logicznych, takich jak ==, ===, >, <, && (AND), || (OR).

2. Operacje logiczne z wartością Boolean
a) Operatory porównania:
Operacje porównania zwracają wartości Boolean, np.:

5 > 3 zwróci true,
4 === 5 zwróci false.

b) Operatory logiczne:

- && (AND): Zwraca true tylko wtedy, gdy obie wartości są prawdziwe.
- || (OR): Zwraca true, jeśli przynajmniej jedna z wartości jest prawdziwa.
- ! (NOT): Neguje wartość logiczną, zmieniając true na false i odwrotnie.

3. Falsy i Truthy
W JavaScript istnieją wartości, które są konwertowane na Boolean w kontekście logicznym,
np. w warunkach if. Wartości te są klasyfikowane jako:

a) Falsy (traktowane jako false):

- false
- 0/-0
- "" (pusty string)
- null
- undefined
- NaN

b) Truthy (traktowane jako true):
Wszystkie inne wartości są traktowane jako true, np.:

- Dowolny niepusty string ("Hello"),
- Dowolna liczba inna niż 0 (w tym liczby ujemne),
- Obiekty i tablice.
*/