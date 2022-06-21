<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    use HasFactory;
    protected $table = 'performance';
    protected $fillable = ["id", "exercise_id", "language", "description", "img", "user_id", "reps", "sets"];

    public $timestamps = false;
}
