<?php


$_SESSION['name'] = 'Krystian';
$_SESSION['surname'] = 'Kapa';

view("index.view.php", [
    'heading' => 'Home',
]);
