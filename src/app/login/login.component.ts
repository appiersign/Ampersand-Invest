import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  public error;
  public errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {
    this.auth.login({email: this.email, password: this.password}).subscribe(response => {
      this.auth.setAuthUser(response);
      this.router.navigate(['projects']).then(r => console.log(r));
    }, error => {
      this.error = true;
      this.errorMessage = `${error.statusText}: Login failed please try again! `;
    });
  }

}
