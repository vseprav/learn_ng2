/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjectFormComponent } from './project-form.component';

describe('ProjectFormComponent', () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has title "New Project"', () => {
    expect(compiled.querySelector('.title').textContent).toEqual('New Project');
  });

  it('should has new-project form', () => {
    expect(compiled.querySelector('form.new-project')).toBeTruthy();
  });

  it('project form should has name field', () => {
    expect(compiled.querySelector('form.new-project .form-group.name input[name="name"]')).toBeTruthy();
  });

  it('name field should has max length 255', () => {
    expect(compiled.querySelector('form.new-project .form-group.name input[name="name"]').maxLength).toEqual(255);
  });

  it('name field should has min length 3', () => {
    expect(compiled.querySelector('form.new-project .form-group.name input[name="name"]').minLength).toEqual(3);
  });

  it('project form should has label Name for name field', () => {
    expect(compiled.querySelector('form.new-project .form-group.name label').textContent).toEqual('Name');
  });

  it('project form should has submit button', () => {
    expect(compiled.querySelector('form.new-project button[type="submit"]').textContent).toEqual('Submit');
  });
});
