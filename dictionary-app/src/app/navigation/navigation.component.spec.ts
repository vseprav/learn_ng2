/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app title Pocket Dictionary', async(() => {
    expect(compiled.querySelector('.row h1').textContent).toEqual('Pocket Dictionary');
  }));

  it('should render home link', async(() => {
    expect(compiled.querySelector('.row .navbar a.home').textContent).toEqual('Home');
  }));

  it('should render projects link', async(() => {
    expect(compiled.querySelector('.row .navbar a.projects').textContent).toEqual('Projects');
  }));

  it('should render dictionaries link', async(() => {
    expect(compiled.querySelector('.row .navbar a.dictionaries').textContent).toEqual('Dictionaries');
  }));

});
