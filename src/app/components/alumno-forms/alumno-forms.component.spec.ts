import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFormsComponent } from './alumno-forms.component';

describe('AlumnoFormsComponent', () => {
  let component: AlumnoFormsComponent;
  let fixture: ComponentFixture<AlumnoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
