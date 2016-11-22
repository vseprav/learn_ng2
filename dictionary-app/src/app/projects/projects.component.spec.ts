/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import {ProjectService} from "../project.service";
import {ProjectServiceStub} from "../../../testing/services/project.service.stub";
import {ProjectComponent} from "./project/project.component";

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let compiled: any;
  let projectService: ProjectService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent, ProjectsComponent ],
      providers:    [ {provide: ProjectService, useValue: ProjectServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    projectService = fixture.debugElement.injector.get(ProjectService);
    component = fixture.componentInstance;
    component.projects = [{title:'Project 1', id:1}];
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-project tag', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('app-project')).toBeTruthy();
  }));

  it('should render project title Project 1', async(() => {
    expect(compiled.querySelector('.title').textContent).toEqual('Project 1');
  }));
});
