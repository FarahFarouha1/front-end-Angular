import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParServiceComponent } from './recherche-par-service.component';

describe('RechercheParServiceComponent', () => {
  let component: RechercheParServiceComponent;
  let fixture: ComponentFixture<RechercheParServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParServiceComponent]
    });
    fixture = TestBed.createComponent(RechercheParServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
