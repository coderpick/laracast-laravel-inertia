<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Hafizur Rahman',
        'frameworks' => ['Laravel', 'Vue', 'Inertia'],
    ]);
});
