import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'] 
})
export class FormGroupComponent {

  formGroup!: FormGroup;

  constructor(){
    this.createForm();
  }
  
  createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(10)]),
      surname: new FormControl("", [Validators.required, Validators.minLength(10)]),
      age: new FormControl(null,[Validators.required])
    })
  }


}
