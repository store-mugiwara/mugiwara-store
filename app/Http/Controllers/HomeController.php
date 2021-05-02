<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $bannerImage = asset('storage/images/shopping.svg');
        $spotlights = Product::limit(3)->offset(0)->get();

        $countProducts = Product::all()->count();

        $products = Product::where('id', '>', $spotlights->last()->id)->paginate(4);

        $images = Image::all();

        for ($i = 0; $i < count($images); $i++) {
           $images[$i]->path =  env('APP_URL') . 'storage/' . $images[$i]->path;
        }

        return Inertia::render('Home', [
            'bannerImage' => $bannerImage,
            'spotlights' => $spotlights,
            'products' => $products,
            'images' => $images,
        ]);
    }

    public function details()
    {
        $images = Image::where('product_id', '=', Request::all())->get();

        for ($i = 0; $i < count($images); $i++) {
            $images[$i]->path =  env('APP_URL') . 'storage/' . $images[$i]->path;
         }

        return Inertia::render('components/public/Details', [
            'product' => Product::find(Request::all()),
            'images' => $images
        ]);
    }

    public function fallback()
    {
        return Inertia::render('components/public/Fallback');
    }
}
