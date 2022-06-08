import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // name = new FormControl("raj")

  profileForm=new FormGroup({
 name: new FormControl(''),
 email: new FormControl(''),
 city: new FormControl(''),
 DOB: new FormControl('')

  })

  fetchData()
  {
    alert(this.profileForm.value)
  }


}
