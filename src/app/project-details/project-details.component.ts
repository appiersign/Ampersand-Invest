import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  public project = {is_approved: false, company: {}};

  constructor(private _projectService: ProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._projectService.getProjects()
      .subscribe(data => this.project = data.find(d => d.id === this.route.snapshot.paramMap.get('id')));
  }

  getStatus() {
    return (this.project.is_approved) ? 'approved' : 'pending';
  }

  statusClass(status: boolean) {
    return {'badge-success': status, 'badge-warning': !status};
  }

}
