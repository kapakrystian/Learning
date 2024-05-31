<?php


$routes = require('routes.php');


//analiza url i zapis uri do zmiennej
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];


/*------------------------------------------------
funkcja sprawdzająca czy uri istnieje w routes
 - wymagająca użycia wartości z klucza jeśli true
 - wywołująca funkcje abort jeśli false
-------------------------------------------------*/
function routeToController($uri, $routes)
{
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    } else {
        abort();
    }
}


//funkcja ustawiająca kod odpowiedzi z serwera i wywołująca widok błędu
function abort($code = 404)
{
    http_response_code($code);
    require "views/{$code}.php";
    die();
}


routeToController($uri, $routes);
