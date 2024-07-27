<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts=Post::latest()->paginate(6);
        return inertia('Home',['posts'=>$posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        sleep(2);
     $post = $request->validate([
        'title'=>['required'],
        'body'=>['required'],
     ]);
     Post::create($post);
     
     return redirect('/');

    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return inertia('Show',['post'=>$post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia('Edit',['post'=>$post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        sleep(1);
        $UPDATEDpost = $request->validate([
            'title'=>['required'],
            'body'=>['required'],
         ]);
         $post->update($UPDATEDpost);
        return redirect('/')->with(
            'msg',
            'post updated'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/');
    }
}