/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DictionariesComponent } from './dictionaries.component';

describe('DictionariesComponent', () => {
  let component: DictionariesComponent;
  let fixture: ComponentFixture<DictionariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
