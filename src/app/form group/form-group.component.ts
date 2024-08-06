import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Persona } from '../utility/persona.model';
import { CustomValidatorService } from '../utility/CustomvalidatorService.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'] 
})
export class FormGroupComponent {

  formGroup!: FormGroup;
  persone: Persona[] = [];

  constructor(
    public customValidatorService: CustomValidatorService
    //altra opzione validare con regex direttamente dentro le [] 
    // di FormControl : es. 
    //     age: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern(/^(?:[1-9][0-9]?|100)$/)
      // ])
  ){
    this.createForm();
  }
  
  createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(5)]),
      surname: new FormControl("", [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null,[Validators.required])
    })
  }

  onSubmit() {
    console.log("click")
    if(this.formGroup.valid) {
      console.log(this.formGroup.value);
      let persona = new Persona();
      persona = this.formGroup.value;
      this.persone.push(persona);
      console.log(this.persone)
    }
  }

  removePersona(i:number) {
    this.persone.splice(i,1);
    console.log(this.persone)
  }

}
