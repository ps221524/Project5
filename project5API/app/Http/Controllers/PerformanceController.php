<?php

namespace App\Http\Controllers;

use App\Models\Performance;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PerformanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Performance::All();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Performance::create($request->all());
    }

    /**
     * Display the specified resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //$performance = User::find($id)->Performance;

        $performance =  DB::select('SELECT * FROM exercise
INNER JOIN performance
ON exercise.id = performance.exercise_id WHERE performance.user_id = ?',    [$id] );

        return response()->json($performance);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Performance  $Performance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Performance $performance)
    {
        $performance->update($request->all()); return $performance;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Performance  $Performance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Performance $performance)
    {
        $performance->delete();
    }
}
