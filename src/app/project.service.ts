import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from './project';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('https://randi-api-test.herokuapp.com/api/v1/projects', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODhcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1OTM3NzExMzcsImV4cCI6MTU5MzgxNDMzNywibmJmIjoxNTkzNzcxMTM3LCJqdGkiOiJRbnhITVZrQUJIM1dBaUtQIiwic3ViIjoxLCJwcnYiOiJjZjI4NGMyYjFlMDZmMzNjMjZiZDU3OTc1NjZkOWZkNzRiZTExYmY1In0.AO5V1DDqUJes9wZuSoj1xiIoFEx_qAOz-jZGlMH4gyk'
      }
    });
  }
}
