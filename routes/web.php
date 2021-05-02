<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/produto/detalhes', [HomeController::class, 'details'])->name('details');

Route::fallback([HomeController::class, 'fallback']);

/**
 * ADMIN ROUTES
 */
Route::prefix('admin')->group(function(){
    Route::name('admin.')->group(function(){

        Route::get('/', [AuthController::class, 'loginForm'])->name('loginForm');
        Route::post('/login', [AuthController::class, 'login'])->name('login');

        Route::middleware('auth')->group(function(){

            Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
            Route::post('/new-product', [AdminController::class, 'newProduct'])->name('newProduct');
            Route::post('/edit-product', [AdminController::class, 'editProduct'])->name('editProduct');
            Route::post('/delete-product', [AdminController::class, 'deleteProduct'])->name('deleteProduct');

            Route::post('/new-category', [AdminController::class, 'newCategory'])->name('newCategory');
            Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
        });
    });
});
