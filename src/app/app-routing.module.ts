import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: 'projects/:id', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent, ProjectListComponent, ProjectDetailsComponent];
