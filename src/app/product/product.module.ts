import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';
import { ReviewformsComponent } from './reviewforms/reviewforms.component';




@NgModule({
  declarations: [ProductComponent,ProductDetailsComponent, ReviewformsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ShareModule
  
  ]
})
export class ProductModule { }
