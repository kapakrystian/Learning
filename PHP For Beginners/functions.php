<?php

function dd($value)
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";

    die();
}

function urlIs($value)
{
    return $_SERVER['REQUEST_URI'] === $value;
}

function authorize($condition, $status = Response::FORBIDDEN)
{
    if (!$condition) {
        abort($status);
    }
}

/*------------------------------------------------
Funkcja pomocnicza określająca ścieżkę pliku
 (Folder główny aplikacji + ścieżka z parametru)
-------------------------------------------------*/
function base_path($path = '')
{
    return BASE_PATH . $path;
}

/*----------------------------------------------------
Funkcja pomocnicza odpowiedzialna za ładowanie widoków
 (extract - zamienia przekazywaną tablicę atrybutów
 do postaci zmienna(klucz) - wartość(wartość klucza))
Dzięki temu można odnosić się do danych z kontrolera
bezpośrednio w widoku.
-----------------------------------------------------*/
function view($path, $attributes = [])
{
    extract($attributes);

    require base_path('views/' . $path);
}
