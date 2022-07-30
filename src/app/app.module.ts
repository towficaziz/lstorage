import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './userApp/user-list/user-list.component';
import { UserRegisterComponent } from './userApp/user-register/user-register.component';
import { UserUpdateComponent } from './userApp/user-update/user-update.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


const routeArray=[
  {
    path:'ngclass',
    component: NgClassComponent
  },
  {
    path:'ngstyle',
    component: NgStyleComponent
  },
  {
    path:'userList',
    component: UserListComponent
  },
  {
    path:'addUser',
    component: UserRegisterComponent
  },
  {
    path:'updateUser/:id',
    component: UserUpdateComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegisterComponent,
    UserUpdateComponent,
    NgClassComponent,
    NgIfComponent,
    NgStyleComponent,
    StructuralDirComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
