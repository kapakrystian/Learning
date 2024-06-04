<?php


use Core\App;
use Core\Database;

$db = App::container()->resolve(Database::class); //string z pełnym namespace'em klasy

$currentUserId = 2;

$note = $db->query('select * from notes where id = :id', [
    'id' => $_GET['id']
])->findOrFail();

authorize($note['user_id'] === $currentUserId);

view("notes/show.view.php", [
    'heading' => 'Note',
    'note' => $note
]);
