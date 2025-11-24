import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContratacionComponent } from './form-contratacion.component';

describe('FormContratacionComponent', () => {
  let component: FormContratacionComponent;
  let fixture: ComponentFixture<FormContratacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContratacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
