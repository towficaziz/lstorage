import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UserListComponent } from './userApp/user-list/user-list.component';
import { UserRegisterComponent } from './userApp/user-register/user-register.component';
import { UserUpdateComponent } from './userApp/user-update/user-update.component';

const routes: Routes = [
  { path: 'userList', component: UserListComponent },
  { path: 'addUser', component: UserRegisterComponent },
  { path: 'updateUser/:id', component: UserUpdateComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }