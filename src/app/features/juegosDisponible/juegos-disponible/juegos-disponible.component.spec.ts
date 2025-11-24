import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosDisponibleComponent } from './juegos-disponible.component';

describe('JuegosDisponibleComponent', () => {
  let component: JuegosDisponibleComponent;
  let fixture: ComponentFixture<JuegosDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosDisponibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
