import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';

const routes: Routes = [
  {
    path:'loing',
    component:LoginComponent
  },
  {
    path:'singup',
    component:SingupComponent
  },
  {
    path: '',
    redirectTo: 'loing',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
