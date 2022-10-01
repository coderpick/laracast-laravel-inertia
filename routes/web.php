<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/users', function () {
    sleep(1);

    return Inertia::render('User');
});
Route::get('/setting', function () {
    sleep(1);

    return Inertia::render('Setting');
});
