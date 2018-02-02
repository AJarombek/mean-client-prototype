import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
       'username': [''],
       'password': ['']
    });
  }

  onSubmit() {
    console.info(this.formModel.value);
  }
}
