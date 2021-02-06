import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IUsers} from './models/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state: IUsers = {name: 'name', age: 'age', city: 'city'};
  users = [];

// Array<any>
  checkForm(myForm: NgForm): void {
    this.users.push(myForm.form.value);
  }
}
