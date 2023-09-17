import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNovedadesComponent } from './registro-novedades.component';

describe('RegistroNovedadesComponent', () => {
  let component: RegistroNovedadesComponent;
  let fixture: ComponentFixture<RegistroNovedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroNovedadesComponent]
    });
    fixture = TestBed.createComponent(RegistroNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
