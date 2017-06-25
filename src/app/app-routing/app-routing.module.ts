import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category',
    component: ProductListComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }