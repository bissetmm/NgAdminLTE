import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbord22Component } from './dashbord22.component';

describe('Dashbord22Component', () => {
  let component: Dashbord22Component;
  let fixture: ComponentFixture<Dashbord22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashbord22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashbord22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
