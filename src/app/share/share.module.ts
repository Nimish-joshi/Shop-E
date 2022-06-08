import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { spaceConverterPipe } from './dash_to_space_pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    spaceConverterPipe],
  imports: [
    CommonModule
  ],
   exports:[
     FormsModule,
     StarComponent,
    spaceConverterPipe,
  ReactiveFormsModule]
})
export class ShareModule { }
