import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoReciboPage } from './nuevo-recibo.page';

describe('NuevoReciboPage', () => {
  let component: NuevoReciboPage;
  let fixture: ComponentFixture<NuevoReciboPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoReciboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
