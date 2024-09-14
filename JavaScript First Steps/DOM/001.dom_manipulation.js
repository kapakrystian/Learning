/*
# Metody na obiekcie document w JavaScript (DOM)

## 1. Wyszukiwanie elementów w DOM:
- `document.getElementById(id)` - Zwraca element o podanym id.
- `document.getElementsByClassName(className)` - Zwraca kolekcję elementów o danej klasie.
- `document.getElementsByTagName(tagName)` - Zwraca kolekcję elementów o danym tagu.
- `document.querySelector(selector)` - Zwraca pierwszy element pasujący do selektora CSS.
- `document.querySelectorAll(selector)` - Zwraca wszystkie elementy pasujące do selektora CSS.

## 2. Tworzenie nowych elementów:
- `document.createElement(tagName)` - Tworzy nowy element HTML.
- `document.createTextNode(text)` - Tworzy nowy węzeł tekstowy.

## 3. Manipulowanie treścią i atrybutami:
- `element.innerHTML` - Ustawia lub zwraca HTML wewnątrz elementu.
- `element.textContent` - Ustawia lub zwraca tekst wewnątrz elementu.
- `element.setAttribute(name, value)` - Ustawia atrybut elementu.
- `element.getAttribute(name)` - Zwraca wartość atrybutu elementu.
- `element.removeAttribute(name)` - Usuwa atrybut elementu.

## 4. Manipulacja elementami:
- `element.appendChild(child)` - Dodaje element dziecko.
- `element.removeChild(child)` - Usuwa element dziecko.
- `element.replaceChild(newChild, oldChild)` - Zastępuje element dziecko.
- `element.insertBefore(newElement, referenceElement)` - Wstawia nowy element przed podanym.

## 5. Obsługa zdarzeń:
- `element.addEventListener(event, callback)` - Dodaje nasłuchiwacz zdarzeń.
- `element.removeEventListener(event, callback)` - Usuwa nasłuchiwacz zdarzeń.

## 6. Informacje o stronie:
- `document.title` - Ustawia lub zwraca tytuł strony.
- `document.URL` - Zwraca URL bieżącej strony.
- `document.referrer` - Zwraca URL poprzedniej strony.

## 7. Stylowanie elementów:
- `element.style` - Ustawia style elementu inline.
- `window.getComputedStyle(element)` - Zwraca obiekt ze stylami zastosowanymi do elementu.

## 8. Zarządzanie formularzami i ciasteczkami:
- `document.forms` - Zwraca kolekcję wszystkich formularzy na stronie.
- `document.cookie` - Ustawia lub zwraca ciasteczka.

## 9. Nawigacja po DOM-ie:
- `element.parentNode` - Zwraca rodzica elementu.
- `element.childNodes` - Zwraca wszystkie dzieci elementu.
- `element.firstChild` / `element.lastChild` - Zwraca pierwsze / ostatnie dziecko elementu.
- `element.nextSibling` / `element.previousSibling` - Zwraca kolejny / poprzedni element węzła.

## 10. Usuwanie elementów:
- `element.remove()` - Usuwa element z DOM.

*/