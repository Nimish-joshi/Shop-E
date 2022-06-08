import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const route : Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product', loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
  
  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule,
    
  ],
  exports:[]
})
export class AppRoutingModule { }
