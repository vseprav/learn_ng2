import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Project} from "./projects/project";
import {Response, Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  url:string = 'http://localhost:3000/projects/';

  constructor(private http: Http) { }

  getProjects():Observable<Project[]> {
    return this.http.get(this.url).map(ProjectService.extractData);
  }

  private static extractData(res: Response) {
    return res.json();
  }

}
