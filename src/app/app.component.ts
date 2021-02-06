import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {IUsers} from './models/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];

  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);

  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    city: this.city
  });

  checkForm(myForm: FormGroup): void {
    this.users.push(this.myForm.value);
  }

}
