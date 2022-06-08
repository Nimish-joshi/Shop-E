import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from './product_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopE';

  cart_Value= new BehaviorSubject<number>(0)

  subObs$ = new Subject<number>();
  bsubObs$ = new BehaviorSubject<number>(0);

  constructor(
    private productService:ProductService
  )
  {}
  ngOnInit(): void {

    this.subObs$.next(1)
    this.bsubObs$.next(1)

    // this.productService.getCartValue().subscribe(
    //   value=>this.cart_Value=value)

    this.cart_Value= this.productService.cartValue$;
  
  this.subObs$.subscribe((val) => console.log(val))
  this.bsubObs$.subscribe((val) => console.log(val))

  this.subObs$.next(2)
  this.bsubObs$.next(2)

    }
}
