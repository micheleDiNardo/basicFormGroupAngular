import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormGroupComponent } from "./form-group.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        FormGroupComponent
      ],
  imports: [
    // ... other imports
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormGroupComponent  // Export the component so it can be used in other modules
  ]
  // ...
})
export class FormGroupModule { }