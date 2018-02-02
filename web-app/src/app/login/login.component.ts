import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
       'username': ['', Validators.required, Validators.maxLength(15)],
       'password': ['', Validators.required, Validators.maxLength(63)]
    });
  }

  onSubmit() {
    console.info(this.formModel.value);
  }
}
