<?php


class Age
{
    private $age;

    public function __construct($age)
    {
        if ($age < 0 || $age > 120) {
            throw new InvalidArgumentException('That makes no sense');
        }

        $this->age = $age;
    }

    public function increment()
    {
        return new self($this->age + 1);
    }

    public function get()
    {
        return $this->age;
    }
}


$age = new Age(35);
$age = $age->increment();
var_dump($age->get());


/*
Value Objects
Value objects (obiekty wartości) to obiekty, które są identyfikowane wyłącznie przez ich wartości,
a nie przez tożsamość (identity). Oznacza to, że dwa różne obiekty wartości są równe, jeśli mają te same wartości wewnętrzne.
W przeciwieństwie do obiektów encji, które mają swoją unikalną tożsamość,
obiekty wartości są niemutowalne (immutable) i mogą być bezpiecznie współdzielone.

Mutability (Zmienne) vs. Immutability (Niemutowalne)
Mutability: Obiekty zmienne to takie, których stan może być zmieniany po ich utworzeniu.
Zmiana stanu obiektu jest zwykle realizowana przez metody, które modyfikują jego właściwości.
Immutability: Obiekty niemutowalne to takie, których stan nie może być zmieniany po ich utworzeniu.
Wszelkie modyfikacje prowadzą do utworzenia nowego obiektu z nowymi wartościami, zachowując oryginalny obiekt bez zmian.
*/