<?php


use Core\App;
use Core\Database;

$db = App::container()->resolve(Database::class); //string z pełnym namespace'em klasy

$notes = $db->query('select * from notes where user_id = :user_id', [
    'user_id' => $_SESSION['user']['id']
])->get();

view("notes/index.view.php", [
    'heading' => 'My Notes',
    'notes' => $notes
]);
