<?php


/*
SOLID

S jak samodzielny - dana klasa powinna mieć jedną odpowiedzialność, jedną funkcjonalność którą realizuje, jeden główny cel.
                    Klasa powinna robić jedną rzecz i robić ją dobrze.
O jak otwarty - tworzony kod musi być możliwy do rozszerzenia i zamknięty na modyfikacje. Należy używać świadomie kompozycji,
                dziedziczenia czy modyfikatorów dostępu.
L jak Liskov Barbara - kod powinien poprawnie współpracować z klasą jak i wszystkimi jej podklasami.
                       Innymi słowy, jeśli zależysz od jakiegoś interfejsu to wszystkie jego implementacje powinny poprawnie działać z twoją klasą/metodą.
                       Stosowanie się tej metody pozwala na dostarczenie alternatywnej implementacji danej funkcjonalności bez zmiany twojego kodu.
I jak interfejsy - wytyczna ta mówi o rozdzielaniu interfejsów, aby inny fragment kodu, który używa twojej klasy,
                   używał wyłącznie podzbioru metod, które są w tamtym przypadku istotne. Chodzi o to aby nie stwarzać konieczności zmiany danego
                   interfejsu w dużej ilości miejsc przy okazji wprowadzania zmian w danym interfejsie.
D jak oDwrócenie zależności - wytyczna ta mówi, że wysokopoziomowe klasy nie powinny zależeć od niskopoziomowych detali.
*/