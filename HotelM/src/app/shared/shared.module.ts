import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,



  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    HttpClientModule
    
  ]
})
export class SharedModule { }
