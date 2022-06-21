<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    use HasFactory;
    protected $table = 'exercise';
    protected $fillable = ["id", "name", "language", "description", "img"];
    public $timestamps = false;
}
