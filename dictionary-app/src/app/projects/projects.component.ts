import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {Project} from "./project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']

})
export class ProjectsComponent implements OnInit {

  projects:Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
