import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.star_width=this.rating*15
    
  }

@Input()  
  rating:number=0
  star_width!:number

  @Output()
  sendRating=new EventEmitter<number>()


  showRating():void{
    //alert(this.rating)
    this.sendRating.emit(this.rating);
    
  }
}
