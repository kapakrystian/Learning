var firstName = 'Krystian'
let lastName = 'Kapa'
const DATE_OF_BIRTH = '04.11.1998'

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
W JavaScript var, let i const służą do deklarowania zmiennych, ale różnią się w kilku kluczowych aspektach:

Zakres (Scope):
var: Ma zakres funkcji. Zmienna zadeklarowana za pomocą var jest dostępna w całej funkcji, w której została zadeklarowana, niezależnie od tego, w jakim bloku znajduje się deklaracja.
let: Ma zakres blokowy. Zmienna zadeklarowana za pomocą let jest dostępna tylko w obrębie bloku (np. w pętli czy instrukcji warunkowej), w którym została zadeklarowana.
const: Ma zakres blokowy, podobnie jak let. Zmienna zadeklarowana za pomocą const jest dostępna tylko w obrębie bloku, w którym została zadeklarowana.

Hoisting:
var: Deklaracje są przenoszone na początek funkcji lub skryptu, ale są inicjalizowane jako undefined do momentu przypisania wartości.
let: Deklaracje są przenoszone, ale nie są inicjalizowane, co oznacza, że dostęp do zmiennej przed jej deklaracją skutkuje błędem (ReferenceError) z powodu "tymczasowej strefy martwej".
const: Zachowuje się podobnie jak let pod względem hoistingu — deklaracje są przenoszone, ale zmienna musi być zadeklarowana przed jej użyciem.

Ponowne deklarowanie:
var: Można wielokrotnie deklarować tę samą zmienną w tym samym zakresie bez błędu.
let: Próba ponownego zadeklarowania zmiennej w tym samym zakresie skutkuje błędem składniowym (SyntaxError).
const: Nie pozwala na ponowne zadeklarowanie zmiennej w tym samym zakresie i również skutkuje błędem składniowym, jeśli spróbujemy zadeklarować zmienną o tej samej nazwie.

Mutowalność:
var i let: Można zmieniać przypisane wartości zmiennych.
const: Służy do deklarowania stałych. Oznacza to, że nie można zmieniać przypisanej wartości zmiennej.
Jednakże, jeśli wartość jest obiektem lub tablicą, można zmieniać właściwości tego obiektu lub elementy tablicy.

Inicjalizacja:
var: Można zadeklarować zmienną bez przypisania jej wartości, a później przypisać.
let: Można zadeklarować zmienną bez przypisania jej wartości, a później przypisać.
const: Musi być zadeklarowana i przypisana w tej samej linii. Nie można jej pozostawić niezainicjalizowanej.

Te różnice mają wpływ na sposób, w jaki zmienne są zarządzane i jakie mogą wystąpić błędy w kodzie.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Przy pomocy narzędzi developerskich w przeglądarce możemy zaznaczyć elementy występujące na stronie,
a następnie edytować ich treść, styl czy wywołać na nich jakąś akcję z poziomu konsoli. 
Do odwołania do bieżącego, zaznaczonego elementu służy komenda $0.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/