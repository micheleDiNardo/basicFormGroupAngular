import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class CustomValidatorService {
    nomeCognomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    etaRegex = /^(?:[1-9][0-9]?|100)$/;

    isFieldValid(form: FormGroup, field: string) {
        return !form.get(field)?.valid && form.get(field)?.touched;
    } //lo utilizzo direttamente nel form-group-html


isNameSurnameValid(form:FormGroup, field: string) {
      if (form.get(field)?.touched) {
        const name = form.get(field)?.value;
        if (name !== null && this.nomeCognomeRegex.test(name)) {
            return true;
        }else {
            return false;
        }
    }
    return true;
}

isAgeValid(form:FormGroup, field: string) {
    if (form.get(field)?.touched) {
      const age = form.get(field)?.value;
      if (age !== null && this.etaRegex.test(age)) {
          return true;
      }else {
          return false;
      }
  }
  return true;
}


}