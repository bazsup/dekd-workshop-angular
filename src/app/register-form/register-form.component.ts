import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dekd-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: '',
      age: [
        null,
        [
          Validators.required,
          Validators.min(20),
          Validators.max(80),
          Validators.maxLength(5)
        ]
      ]
      // [default value, [Validator, ...]
    })
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(console.log)
  }

  get age() {
    const age = this.registerForm.get('age')
    console.log(age)
    return age
  }

}
