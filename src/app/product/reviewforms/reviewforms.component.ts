import { Component, OnInit } from '@angular/core';
import { reviewforms } from '../reviewforms';

@Component({
  selector: 'app-reviewforms',
  templateUrl: './reviewforms.component.html',
  styleUrls: ['./reviewforms.component.scss']
})
export class ReviewformsComponent implements OnInit {

  rf=new reviewforms
  constructor() { 
  }

  rating=[1,1.5,2,2.5,3,3.5,4,4.5,5]
  ngOnInit(): void {
  }
  submitdata(){
    alert(this.rf.name + this.rf.email)
  }

}
