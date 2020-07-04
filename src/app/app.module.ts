import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './project.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
