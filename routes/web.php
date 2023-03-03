<?php

use App\Http\Controllers\Abone\MainController;
use Illuminate\Support\Facades\Route;




Route::get('/', function () {
    return view('layouts.app');
});

Route::get('/evde-internet-basvuru', [MainController::class, 'index'])->name('abone.index');

Route::get('/evde-internet-basvuru/iletisim', [MainController::class, 'iletisim'])->name('abone.iletisim');
