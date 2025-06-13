import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCohortComponent } from './clinical-cohort.component';

describe('ClinicalCohortComponent', () => {
  let component: ClinicalCohortComponent;
  let fixture: ComponentFixture<ClinicalCohortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicalCohortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
