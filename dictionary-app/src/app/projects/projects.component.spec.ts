/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, async} from '@angular/core/testing';

import {ProjectsComponent} from './projects.component';
import {ProjectService} from "../project.service";
import {ProjectComponent} from "./project/project.component";
import {Http, ConnectionBackend, RequestOptions, ResponseOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ProjectServiceStub} from "../../../testing/services/project.service.stub";

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let compiled: any;
  let projectService: ProjectService;
  let projects = [{name: 'Project 1', id: 1}];
  let projectServiceStub;

  beforeEach(() => {

    projectServiceStub = {
      getProjects: function () {
        return Observable.from([
          new Response(new ResponseOptions({body: projects}))
        ]).map(ProjectService.extractData);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ProjectComponent, ProjectsComponent],
      providers: [{provide: ProjectService, useValue: projectServiceStub}]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    projectService = TestBed.get(ProjectService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-project tag', async(() => {
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-project')).toBeTruthy();
  }));

  it('should render project name Project 1', async(() => {
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.name').textContent).toEqual('Project 1');
  }));

  it('should render button for add Project', async(() => {
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.add-project').textContent).toEqual('Add');
    expect(compiled.querySelector('.add-project').href).toContain('/projects/new');
  }));

});
