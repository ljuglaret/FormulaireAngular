import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmResultatComponent } from './qcm-resultat.component';

describe('QcmResultatComponent', () => {
  let component: QcmResultatComponent;
  let fixture: ComponentFixture<QcmResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmResultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
