<?php

use Core\Validator;

it('validates a string', function () {
    expect(Validator::string('foobar'))->toBeTrue();
    expect(Validator::string(''))->toBeFalse();
});


it('validates an email', function () {
    expect(Validator::email('foobar@gmail.com'))->toBeTrue();
    expect(Validator::email('foobar.com'))->toBeFalse();
});
