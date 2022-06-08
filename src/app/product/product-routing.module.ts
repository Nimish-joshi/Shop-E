import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';

const route : Routes=[
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'product/:id',
    component:ProductDetailsComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProductRoutingModule { }
