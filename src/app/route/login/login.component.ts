import { Component, OnInit } from '@angular/core';
import { Login } from '../../shared/models/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginModel: Login = new Login();

  constructor() { }

  ngOnInit() {
  }

  submitForLogin() {
    console.log(this.loginModel);
  }
}
