<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_UserStore()
    {
        

      $this->call('POST', '/api/register', [
            'name' => 'AdminTest',
            'email' => 'Admin@live.nl',
            'password' => 'AdminTestPassword',
            'password_confirmation' => 'AdminTestPassword',
       ]);
      
       $this->assertDatabaseHas('users', ['name' => 'AdminTest', 'email' => 'Admin@live.nl']);
       
    }

    public function test_UserDelete()
    {

       $this->seed();
       $user = User::factory()->create();

       $this->actingAs($user)->delete(route('users.destroy', 69));

       $this->assertDatabaseMissing('users', ['name' => 'henk', 'email' => 'Henk@live.nl']);
    }
}
