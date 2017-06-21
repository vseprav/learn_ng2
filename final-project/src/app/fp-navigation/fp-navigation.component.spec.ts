import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpNavigationComponent } from './fp-navigation.component';

describe('FpNavigationComponent', () => {
  let component: FpNavigationComponent;
  let fixture: ComponentFixture<FpNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
