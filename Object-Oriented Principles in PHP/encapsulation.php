<?php


/*
Enkapsulacja to sposób ochrony integralności obiektu.
Wyraźnie określa, gdzie właściwość lub metoda może być używana.

Istnieją trzy rodzaje enkapsulacji - Publiczna (domyślna), Prywatna, Chroniona.

Publiczna enkapsulacja pozwala na dostęp do właściwości lub użycie metody klasy.
Prywatna enkapsulacja ogranicza użycie właściwości/metody klasy tylko do niej samej.
Chroniona enkapsulacja jest taka sama jak prywatna, ale może być rozszerzona do klas potomnych/podklas.
*/

/*
Korzyści z Enkapsulacji:
- Ochrona integralności danych:
    Enkapsulacja chroni dane przed nieautoryzowanym dostępem i modyfikacją.
    Możemy określić, które części kodu mają prawo do zmiany określonych właściwości.

- Łatwość utrzymania i modyfikacji kodu:
    Dzięki enkapsulacji zmiany wewnętrznej implementacji klasy nie wpływają na kod,
    który z niej korzysta. Zmniejsza to ryzyko wprowadzenia błędów podczas modyfikacji kodu.

- Reużywalność kodu:
    Klasy z dobrze zdefiniowanymi interfejsami są łatwiejsze do ponownego użycia
    w różnych kontekstach, co przyczynia się do tworzenia bardziej modularnych aplikacji.

- Ukrywanie szczegółów implementacyjnych:
    Klasy mogą ukrywać swoje szczegóły implementacyjne, 
    eksponując tylko te elementy, które są niezbędne do korzystania z nich.
    Pozwala to na skupienie się na logice biznesowej bez konieczności znajomości 
    wewnętrznych szczegółów.
*/