<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/users', function () {
    return Inertia::render('User');
});
Route::get('/setting', function () {
    return Inertia::render('Setting');
});

Route::post('/logout', function () {
    dd('logining the user out');
    return Inertia::render('Setting');
});
