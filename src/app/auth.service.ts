import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class AuthService {

  private login_url = 'https://randi-api-test.herokuapp.com/api/v1/login/';
  public error = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  register() {

  }

  login(data) {
    this.clearError();
    return this.http.post<any>(this.login_url, data);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  setAuthUser(user: object): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken(): object {
    return JSON.parse(localStorage.getItem('user')).token;
  }

  getUser(): object {
    return JSON.parse(localStorage.getItem('user')).user;
  }

  private clearError() {
    this.error = false;
  }

}
