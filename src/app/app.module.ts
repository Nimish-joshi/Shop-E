import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductService } from './product_service';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
    
  ],
  imports: [
    
    BrowserModule,
    ShareModule,
    HttpClientModule,
    RouterModule,
    ProductRoutingModule,
    AppRoutingModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
