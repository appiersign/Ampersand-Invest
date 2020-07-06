import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from './project';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('https://randi-api-test.herokuapp.com/api/v1/projects', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      }
    });
  }
}
