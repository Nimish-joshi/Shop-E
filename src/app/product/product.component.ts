import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, Subscription } from 'rxjs';
import { category, productinterface } from '../product';
import { ProductService } from '../product_service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductService

  ) { }

  private subscription!:Subscription

  loading=false
  ngOnInit(): void {
    this.loading=true

    this.productService.getobs().subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("observable complete")
      
      
    )
    this.productService.getobs2().subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("observable complete")
      
    )
    this.subscription=this.productService.getobs3().subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("observable 3 complete")
      
    )
    this.subscription=this.productService.getobs4().pipe(filter(val=> val%2==0),map(val=> val+2)).subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("observable 3 complete")
      
    )

    this.productService.getproduct().subscribe(
      data=>{this.products=data
      this.loading=false
     this.filterProductArray=this.products
      }
     )
  

  }
  // rating=2
  cardwidth=15;
  shadow="0px 0px 10px #f0cdcd"
  private _searchBy:string=" "

  cardTextstyle={
    "font-size": "15px",
    "font-family": 'Courier New'
  }

  
  

  // products:productinterface[] =[
  //   {
  //     id:1,
  //     img:"assets/img/iPhone 13 pro max.jpg",
  //     name:" IPhone 13 pro max",
  //     description:"apple product/SmartPhone",
  //     price:250000,
  //     bgcolor:true,
  //     category:category.MOBILE,
  //     Release_date:new Date(),
  //     code:"mobile-001",
  //     rating:4.5


  //   },
  //   {
  //     id:2,
  //     img:"assets/img/samsung_M33.png",
  //     name:" Samsung M33",
  //     description:"Samsung Mobile/SmartPhone/5G",
  //     price: 35000,
  //     bgcolor:false,
  //     category:category.MOBILE,
  //     Release_date:new Date(),
  //     code:"mobile-002",
  //     rating:3.5



  //   },
  //   {
  //     id:3,
  //     img:"assets/img/oneplus_TV.jpg",
  //     name:" OnePlus TV",
  //     description:"LED 4K TV",
  //     price: 30000,
  //     bgcolor:true,
  //     category:category.TV,
  //     Release_date:new Date(),
  //     code:"tv-001",
  //     rating:5.0





  //   },
  //   {
  //     id:4,
  //     img:"assets/img/LG-TV.jpg",
  //     name:" LG TV",
  //     description:"LG OLED TV",
  //     price: 159999,
  //     bgcolor:false,
  //     category:category.TV,
  //     Release_date:new Date(),
  //     code:"tv-001",
  //     rating:0.5



  //   },
  //   {
  //     id:5,
  //     img:"assets/img/godrej200.jpg",
  //     name:" Godrej Refrigerator",
  //     description:"20L refrigerator",
  //     price:18999,
  //     bgcolor:true,
  //     category:category.FRIDGE,
  //     Release_date:new Date(),
  //     code:"fridge-001",
  //     rating:2.0




  //   },
  //   {
  //     id:6,
  //     img:"assets/img/boat.jpg",
  //     name:" Boat HeadPhones",
  //     description:"High Bass/ Noise Cancellation HeadPhones",
  //     price: 5999,
  //     bgcolor:false,
  //     category:category.HEADPHONES,
  //     Release_date:new Date(),
  //     code:"headphone-001",
  //     rating:4.0





  //   }
    
  // ]

  products:productinterface[] =[]



  filterProductArray=this.products
  filterProduct(category:string):void{
    
    if(category==='all'){
      this.filterProductArray=this.products
    }else{
      this.filterProductArray=this.products.filter(product=>product.category===category)
    }
  }

  get searchBy():string
{
  return this._searchBy 
}
set searchBy(sb:string)
{
  this._searchBy=sb 
  this.filterProductArray=this.products.filter(product=>product.name.toLowerCase().includes(sb.toLowerCase()))
}

//pagination start

displayRating(rt:number){
  console.log(rt)
}
// pageNo=1
startIndex=0
endIndex=4
item_per_page=4
demo=true
changePage(pageNumber:number)
{
  this.startIndex=(pageNumber-1)*this.item_per_page
  this.endIndex=pageNumber*this.item_per_page
  this.demo=!this.demo
}

//pagination end

// unsubobs3
unsubobs(){
  if(this.subscription){
    console.log("ubsubs obs 3");
    this.subscription.unsubscribe()
    
  }

}

addToCart(){
  this.productService.incrementCartValue()
}

}
// searchByfilter(event:any):void
// {
//   this.searchby="event.target.value";
// }


