<?php


class Team
{
    protected $name;
    protected $members = [];

    public function __construct($name, $members = [])
    {
        $this->name = $name;
        $this->members = $members;
    }

    public static function start(...$params)
    {
        return new static(...$params);
    }

    /*---------------------------------------------------------------------------------------------------------------------------------
    static: W kontekście metody statycznej odnosi się do klasy, z której została wywołana metoda.
            Dzięki temu można użyć new static(...$params), aby utworzyć nowy obiekt klasy, która wywołała tę metodę.

    ...$params: Jest to operator rozwinięcia (spread operator), który umożliwia przekazanie dowolnej liczby argumentów do metody start.
                W przypadku Team::start(...$params), argumenty te zostaną przekazane do konstruktora __construct.
    ----------------------------------------------------------------------------------------------------------------------------------*/

    public function name()
    {
        return $this->name;
    }

    public function members()
    {
        return $this->members;
    }

    public function add($name)
    {
        $this->members[] = $name;
    }

    public function cancel()
    {
    }

    public function manager()
    {
    }
}


class Member
{
    protected $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function lastViewed()
    {
    }
}


$acme = Team::start('Acme', [
    new Member('John Doe'),
    new Member('Jane Doe')
]);


var_dump($acme->members());
