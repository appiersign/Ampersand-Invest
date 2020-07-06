import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  handleLogin() {
    this.auth.login({
      email: 'hamra64@hotmail.com',
      password: 'NewPassword'
    });
  }

}
