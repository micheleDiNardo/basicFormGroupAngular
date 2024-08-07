import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class CustomValidatorService {
    nomeCognomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    etaRegex = /^(?:[1-9][0-9]?|100)$/;

    isFieldValid(form: FormGroup, field: string) {
        return !form.get(field)?.valid && form.get(field)?.touched;
    } //lo utilizzo direttamente nel form-group-html per gli span error


isNameSurnameValid(form:FormGroup, field: string) {
      if (form.get(field)?.touched) {
        const name = form.get(field)?.value;

        if (name == null || name == "") {
            return true;
        }
        if (name !== null && this.nomeCognomeRegex.test(name)) {
            return true;
        }
        else if (name !== null && !this.nomeCognomeRegex.test(name)) {
            return false;
        }
    }
    return true;
}

isAgeValid(form:FormGroup, field: string) {
    if (form.get(field)?.touched) {
        const age = form.get(field)?.value;

        if (age == null || age == "") {
            return true;
        }
        if (age !== null && this.etaRegex.test(age)) {
            return true;
        }
        else if (age !== null && !this.etaRegex.test(age)) {
            return false;
        }
    }
    return true;
}

nameSurnameRegex(name: string): boolean {
    if (name == null || name.trim() === "") {
        return false;
    }
    return this.nomeCognomeRegex.test(name);
}

ageRegex(age: number): boolean {
    if (age == null || age === 0) {
        return false;
    }
    return this.etaRegex.test(age.toString());
}


}