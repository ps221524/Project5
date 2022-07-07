<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('exercise')->insert([
            'name' => 'band1',
            'language' => 'genre1',
            'description' => '2021',
            'img' => '2020',
        ]);
    }
}
