<?php


/*
Wyjątki (exceptions) są mechanizmem obsługi błędów w programowaniu, który pozwala na przechwytywanie i zarządzanie błędami,
które mogą wystąpić podczas wykonywania programu. Używanie wyjątków pozwala na oddzielenie kodu obsługi błędów od kodu logiki aplikacji,
co sprawia, że kod jest bardziej czytelny i łatwiejszy do utrzymania.

Podstawy Wyjątków w PHP
W PHP, wyjątki są reprezentowane przez klasę Exception. Kiedy wystąpi wyjątek, normalny przepływ wykonywania programu zostaje przerwany,
a kontrola jest przekazywana do najbliższego bloku catch w stosie wywołań.

Klasa Exception
Podstawowa klasa Exception w PHP ma kilka metod:

__construct($message = "", $code = 0, Exception $previous = null): Konstruktor, który przyjmuje komunikat o błędzie, kod błędu i opcjonalny poprzedni wyjątek.
getMessage(): Zwraca komunikat o błędzie.
getCode(): Zwraca kod błędu.
getFile(): Zwraca nazwę pliku, w którym wystąpił wyjątek.
getLine(): Zwraca numer linii, w której wystąpił wyjątek.
getTrace(): Zwraca tablicę stosu wywołań.
getTraceAsString(): Zwraca stos wywołań jako string.
*/

class AgeException extends Exception
{
}

class Person
{
    private $age;

    public function setAge($age)
    {
        if ($age < 0 || $age > 120) {
            throw new AgeException("Invalid age: $age");
        }
        $this->age = $age;
    }

    public function getAge()
    {
        return $this->age;
    }
}

$person = new Person();

try {
    $person->setAge(25); // Poprawne
    echo $person->getAge(); // Wyjście: 25
    $person->setAge(150); // Rzuca wyjątek
} catch (AgeException $e) {
    echo "Caught exception: " . $e->getMessage(); // Wyjście: Caught exception: Invalid age: 150
}


/*
Hierarchia Wyjątków
PHP pozwala na tworzenie hierarchii wyjątków, co umożliwia bardziej złożoną i precyzyjną kontrolę błędów.
*/
class AppException extends Exception
{
}
class DatabaseException extends AppException
{
}
class FileNotFoundException extends AppException
{
}

try {
    // Kod, który może rzucić wyjątek
    throw new DatabaseException("Database connection failed.");
} catch (DatabaseException $e) {
    echo "Database error: " . $e->getMessage();
} catch (FileNotFoundException $e) {
    echo "File not found error: " . $e->getMessage();
} catch (AppException $e) {
    echo "Application error: " . $e->getMessage();
} catch (Exception $e) {
    echo "General error: " . $e->getMessage();
}


