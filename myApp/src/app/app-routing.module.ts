import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
{ path : '' , component : HomeComponent},
{ path : "login" , component : LoginComponent},
{path : "dataBinding", component : DatabindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
