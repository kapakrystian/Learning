<?php


class Subscription
{
    protected Gateway $gateway;

    public function __construct(Gateway $gateway)
    {
        $this->gateway = $gateway;
    }

    public function create()
    {
    }

    public function cancel()
    {
        $this->gateway->findCustomer();
    }

    public function invoice()
    {
    }

    public function swap($newPlan)
    {
    }
}


interface Gateway
{
    public function findCustomer();
    public function findSubscriptionByCustomer();
}


class StripeGateway implements Gateway
{
    public function findCustomer()
    {
    }

    public function findSubscriptionByCustomer()
    {
    }
}


new Subscription(new StripeGateway());


/*

Kompozycja Obiektów:
Kompozycja obiektów to technika polegająca na tworzeniu obiektów przez ich składanie z innych obiektów,
zamiast dziedziczenia. Kompozycja pozwala na bardziej elastyczne i wielokrotne wykorzystanie kodu,
a także ułatwia zarządzanie zależnościami między obiektami.
W tym przypadku klasa Subscription wykorzystuje kompozycję do integracji z Gateway
poprzez zawieranie instancji obiektu Gateway jako swoją własność.
Subscription jest zbudowana z instancji Gateway (lub jego podklas), co oznacza, że klasa Subscription
nie musi dziedziczyć od Gateway, ale zamiast tego posiada instancję Gateway.

Abstrakcja:
Abstrakcja to technika polegająca na ukrywaniu złożoności systemu poprzez pokazanie tylko istotnych części interfejsu
i ukrywanie szczegółów implementacyjnych. Umożliwia to tworzenie bardziej czytelnych i zarządzalnych interfejsów.
W tym kodzie interfejs Gateway działa jako abstrakcja, która definiuje metody,
które muszą być zaimplementowane przez każdą klasę implementującą ten interfejs.
Gateway zapewnia zestaw metod (findCustomer() i findSubscriptionByCustomer()), które muszą być zaimplementowane
przez konkretne klasy (np. StripeGateway), ale nie precyzuje, jak te metody mają być zaimplementowane.

Polimorfizm:
Pozwala różnym obiektom na odpowiadanie na to samo wywołanie metod w różny sposób, w zależności od ich typów.
 - Polimorfizm czasu kompilacji (statyczny):
   Znany również jako przeciążanie metod. Oznacza to, że wiele metod o tej samej nazwie może istnieć w jednej klasie,
   ale z różnymi sygnaturami (różne parametry).
-  Polimorfizm czasu wykonania (dynamiczny):
   Znany również jako przesłanianie metod. Oznacza, że metoda zadeklarowana w klasie bazowej może być zaimplementowana w różny sposób w klasach pochodnych.
   Jest to osiągane poprzez dziedziczenie i implementowanie interfejsów.
*/