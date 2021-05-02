<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginForm()
    {
        return Inertia::render('LoginForm', ['title' => 'teste']);
    }

    public function login()
    {
        if (Auth::attempt(Request::all())) {
            return Redirect::route('admin.dashboard');
        }
        return Redirect::route('admin.loginForm')->with('success', 'Dados incorretos!');
    }

    public function logout()
    {
        Auth::logout();

        return Redirect::route('admin.loginForm');
    }
}
