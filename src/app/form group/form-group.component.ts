import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Persona } from '../utility/persona.model';
import { CustomValidatorService } from '../utility/CustomvalidatorService.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'] 
})
export class FormGroupComponent {

  formGroup!: FormGroup;
  persone: Persona[] = [];
  booleanButtonSubmit:boolean = true;

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
      name: new FormControl("",[Validators.required]),
      surname: new FormControl("", [Validators.required]),
      age: new FormControl(null,[Validators.required,
      ])
    })
    this.formGroup.valueChanges.subscribe((data) => {
      if (data.name !== null && data.name !== "" &&
        data.surname !== null && data.surname !== "" &&
        data.age !== null && data.age !== 0)
     {
        this.checkAvailableButton(data);
      }else {
        this.booleanButtonSubmit = true;
      }
    });
  }

  checkAvailableButton(data: any) {
    const name = data.name as string;
    const surname = data.surname as string;
    const age = data.age as number;

    if (this.customValidatorService.nameSurnameRegex(name) && 
    this.customValidatorService.nameSurnameRegex(surname) &&
    this.customValidatorService.ageRegex(age)
  ) 
  {
    this.booleanButtonSubmit = false;
  }
  }

  onSubmit() {
    if(this.formGroup.valid) {
      console.log(this.formGroup.value);
      let persona = new Persona();
      persona = this.formGroup.value;
      this.persone.push(persona);
    }
  }

  removePersona(i:number) {
    this.persone.splice(i,1);
  }

}
