import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userName = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userName = this.authService.getUser().first_name;
  }

  logOut() {
    this.authService.logout();
  }

}
