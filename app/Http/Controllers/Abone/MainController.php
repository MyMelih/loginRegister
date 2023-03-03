<?php

namespace App\Http\Controllers\Abone;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return view('abone.index');
    }

    public function iletisim()
    {
        return view('abone.iletisim');
    }
}
