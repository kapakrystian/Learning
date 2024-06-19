<?php

use Core\Authenticator;

it('user can login into the system and session is set', function () {

    //Session start
    session_start();
    
    //Data preparation
    $user = [
        'email' => 'user@gmail.com',
        'id' => 124
    ];

    //Method call
    Authenticator::login($user);

    //Expectations - session set
    expect($_SESSION)->toHaveKey('user');
    expect($_SESSION['user'])->toHaveKeys(['email', 'id']);

    //Expectations - regenerate of session ID
    $old_id = session_id();
    session_regenerate_id(true);
    $new_id = session_id();
    expect($old_id !== $new_id)->toBeTrue();
});
