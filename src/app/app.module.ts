import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './project.service';
import {HttpClientModule} from '@angular/common/http';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
