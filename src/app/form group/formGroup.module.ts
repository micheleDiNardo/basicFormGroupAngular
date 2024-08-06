import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormGroupComponent } from "./form-group.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FormGroupComponent
      ],
  imports: [
    // ... other imports
    ReactiveFormsModule
  ],
  exports: [
    FormGroupComponent  // Export the component so it can be used in other modules
  ]
  // ...
})
export class FormGroupModule { }