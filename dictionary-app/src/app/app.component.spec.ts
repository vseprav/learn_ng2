/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule, RouterOutletMap} from "@angular/router";

describe('App: DictionaryApp', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent
      ],
      imports: [RouterModule],
      providers:[RouterOutletMap]
    });

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render navigation tag inside container class', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('.container app-navigation')).toBeTruthy();
  }));

  it('should render router-outlet tag inside container class', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('.container router-outlet')).toBeTruthy();
  }));
});
