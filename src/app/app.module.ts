import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './project.service';
import {HttpClientModule} from '@angular/common/http';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectListComponent,
    ProjectDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
