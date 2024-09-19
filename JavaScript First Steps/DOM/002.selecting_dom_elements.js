/*
Wybieranie elementów DOM (Document Object Model) jest kluczowym aspektem manipulacji stronami internetowymi w JavaScript.
Oto kilka podstawowych metod, które pozwalają na selekcję elementów na stronie:

getElementById(id):

Służy do wybierania elementu o określonym id.
Przykład: document.getElementById('myElement')


getElementsByClassName(className):

Zwraca kolekcję elementów o podanej klasie.
Przykład: document.getElementsByClassName('myClass')


getElementsByTagName(tagName):

Zwraca kolekcję elementów o określonym tagu.
Przykład: document.getElementsByTagName('div')


querySelector(selector):

Wybiera pierwszy element, który pasuje do podanego selektora CSS.
Przykład: document.querySelector('.myClass') (wybiera pierwszy element z klasą myClass)


querySelectorAll(selector):

Zwraca wszystkie elementy, które pasują do podanego selektora CSS.
Przykład: document.querySelectorAll('div.myClass') (zwraca wszystkie div z klasą myClass)
elementy zwracane są w typie NodeList


children:

Wybiera bezpośrednich potomków danego elementu.
Przykład: document.getElementById('parentElement').children
      const li_child = document.querySelectorAll(".todo-list li:first-child");
      console.log(li_child);


parentElement:

Zwraca bezpośredniego rodzica danego elementu.
Przykład: document.getElementById('myElement').parentElement


nextElementSibling i previousElementSibling:

Zwracają odpowiednio następnego i poprzedniego rodzeństwa elementu w DOM.
Przykład: document.getElementById('myElement').nextElementSibling


Te metody pozwalają na różne poziomy dostępu i manipulacji elementami na stronie. Wybór metody zależy od tego, jakie elementy chcesz wybrać i jakie operacje na nich przeprowadzić.
*/