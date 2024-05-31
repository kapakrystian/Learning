<?php


$config = require 'config.php';
$db = new Database($config);


$heading = 'New note';



require 'views/note-create.view.php';
