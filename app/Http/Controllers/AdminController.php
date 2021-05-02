<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('created_at', 'DESC')->paginate(3);
        $categories = Category::orderBy('created_at', 'DESC')->get();
        $images = Image::all();

        for ($i = 0; $i < count($images); $i++) {
           $images[$i]->path =  env('APP_URL') . 'storage/' . $images[$i]->path;
        }

        return Inertia::render('Dashboard',[
            'products' => $products,
            'images' => $images,
            'categories' => $categories
        ]);
    }

    public function newProduct()
    {
        $product = new Product();
        $product->name = Request::input('name');
        $product->description = Request::input('description');
        $product->price = Request::input('price');
        $product->category_id = Request::input('category_id');
        $product->save();

        for ($i=0; $i < count(Request::file('images')); $i++) {
           $path =  Request::file('images')[$i]->store('products');

           Image::create([
               'path' => $path,
               'product_id' => $product->id
           ]);
           unset($path);
        }

        return Redirect::route('admin.dashboard');
    }

    public function deleteProduct()
    {
        $product = Product::find(Request::input('product'));
        Image::where('product_id', '=', Request::input('product'))->delete();

        $product->delete();

        return Redirect::route('admin.dashboard');
    }


    public function editProduct()
    {
        if (Request::input('deletedImages')) {
            Image::destroy(Request::input('deletedImages'));
        }

        if (!empty(Request::file('newImages'))) {
            for ($i=0; $i < count(Request::file('newImages')); $i++) {
                $path =  Request::file('newImages')[$i]->store('products');

                Image::create([
                    'path' => $path,
                    'product_id' => Request::input('id')
                ]);
                unset($path);
             }
        }

        $product = Product::find(Request::input('id'));
        $product->name = Request::input('name');
        $product->description = Request::input('description');
        $product->price = Request::input('price');
        $product->category_id = Request::input('category_id');
        $product->save();

        return Redirect::route('admin.dashboard');
    }

    public function newCategory()
    {
        Category::create(Request::all());

        return Redirect::route('admin.dashboard');
    }
}
