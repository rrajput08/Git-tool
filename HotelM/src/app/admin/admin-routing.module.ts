import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandingComponent } from '../user/userlanding/userlanding.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';

const routes: Routes = [
  { path: 'adminLanding', component: AdminlandingComponent},
  { path: 'adminSuccess', component: AdminSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
