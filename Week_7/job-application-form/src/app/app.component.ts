import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jobForm = new FormGroup({

    firstName: new FormControl('', Validators.required),

    lastName: new FormControl('', Validators.required),

    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    qualification: new FormControl('', Validators.required),

    skills: new FormControl('', Validators.required),

    experience: new FormControl('', Validators.required),

    address: new FormControl('', Validators.required)

  });

  onSubmit() {

    if (this.jobForm.valid) {

      alert('Application Submitted Successfully');

      console.log(this.jobForm.value);

    }

  }
}