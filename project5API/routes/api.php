<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController; 


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/register', [AuthenticationController::class, 'register']);
// Route::post('/login', [AuthenticationController::class, 'login']);

//Route::group(['middleware' => ['auth:sanctum']], function () {
// protected routes
// Route::get('profile', function(Request $request) { auth()->user();});
// Route::post('/logout', [AuthenticationController::class, 'logout']);

//Route::apiResource('scripts', ScriptController::class);
Route::apiResource('users', UserController::class)
->parameters(['users' => 'user']);

//});

Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found'], 404);
});