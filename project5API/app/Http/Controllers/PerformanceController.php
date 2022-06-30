<?php

namespace App\Http\Controllers;

use App\Models\Performance;
use App\Models\User;
use Illuminate\Http\Request;


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
        $blackboard = User::find($id)->Performance;
        /*        ^               ^
         This will get the user | This will get all the Orders related to the user*/

        return response()->json($blackboard);
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
