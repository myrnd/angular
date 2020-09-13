import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      userName: new FormControl('', Validators.compose([Validators.minLength(3), Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    });

  }

  onSave() {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
  }
}
