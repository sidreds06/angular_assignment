import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../app/pages/home/home';
import { ApiData } from '../app/pages/api-data/api-data';
import { Form } from '../app/pages/form/form';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'api-data', component: ApiData },
  { path: 'form', component: Form },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
