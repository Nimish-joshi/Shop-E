import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, map, Observable, of, Subject } from "rxjs";
import { category, productinterface } from "./product";

@Injectable({
    providedIn:'root'
})

export class ProductService{

    
    constructor(private http:HttpClient)
    {

    }
    private obs$ = of("raj",25)

    getobs():Observable<number|string>{
        return this.obs$
    }
    private obs2$=new Observable(
        observe=>{
            observe.next('amit'),
            observe.next(45) 
            throw Error("error");
            observe.next('pune'),
            observe.complete()
        }
    )
    getobs2():Observable<any>{
        return this.obs2$
    }

    private obs3$=new Observable(
        observe=>{
            observe.next('data1'),
            observe.next('data2'),
            setTimeout(() => {
                observe.next('data 3')
                
            }, 4000);
            // observe.complete()
            

        }
    )
    getobs3():Observable<any>{
        return this.obs3$
    }
    private obs4$=of(1,2,3,4,5,6)
    getobs4():Observable<any>{
      return this.obs4$
    }

    cartValue = 0
    // cartValue$ = new Subject<number>()
    cartValue$ = new BehaviorSubject<number>(0)


    incrementCartValue(){
        this.cartValue ++
        this.cartValue$.next(this.cartValue)
    }
    getCartValue():Observable<number>
    {
        return this.cartValue$
    }

    products:productinterface[] =[
        {
          id:1,
          img:"assets/img/iPhone 13 pro max.jpg",
          name:" IPhone 13 pro max",
          description:"apple product/SmartPhone",
          price:250000,
          bgcolor:true,
          category:category.MOBILE,
          Release_date:new Date(),
          code:"mobile-001",
          rating:4.5
    
    
        },
        {
          id:2,
          img:"assets/img/samsung_M33.png",
          name:" Samsung M33",
          description:"Samsung Mobile/SmartPhone/5G",
          price: 35000,
          bgcolor:false,
          category:category.MOBILE,
          Release_date:new Date(),
          code:"mobile-002",
          rating:3.5
    
    
    
        },
        {
          id:3,
          img:"assets/img/oneplus_TV.jpg",
          name:" OnePlus TV",
          description:"LED 4K TV",
          price: 30000,
          bgcolor:true,
          category:category.TV,
          Release_date:new Date(),
          code:"tv-001",
          rating:5.0
    
    
    
    
    
        },
        {
          id:4,
          img:"assets/img/LG-TV.jpg",
          name:" LG TV",
          description:"LG OLED TV",
          price: 159999,
          bgcolor:false,
          category:category.TV,
          Release_date:new Date(),
          code:"tv-001",
          rating:0.5
    
    
    
        },
        {
          id:5,
          img:"assets/img/godrej200.jpg",
          name:" Godrej Refrigerator",
          description:"20L refrigerator",
          price:18999,
          bgcolor:true,
          category:category.FRIDGE,
          Release_date:new Date(),
          code:"fridge-001",
          rating:2.0
    
    
    
    
        },
        {
          id:6,
          img:"assets/img/boat.jpg",
          name:" Boat HeadPhones",
          description:"High Bass/ Noise Cancellation HeadPhones",
          price: 5999,
          bgcolor:false,
          category:category.HEADPHONES,
          Release_date:new Date(),
          code:"headphone-001",
          rating:4.0
    
    
    
    
    
        }
        
      ]

      getproduct(): Observable<productinterface[]>{
        return this.http.get<productinterface[]>('http://localhost:4200/assets/products.json').pipe(delay(1000))
      }

      getIdProducts(id:number){
        return this.http.get<productinterface[]>('http://localhost:4200/assets/products.json').pipe(map(product=>{return product.find(product=>product.id===id)}))


      }

}