import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbord2Component } from './dashbord2.component';

describe('Dashbord2Component', () => {
  let component: Dashbord2Component;
  let fixture: ComponentFixture<Dashbord2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashbord2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashbord2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
