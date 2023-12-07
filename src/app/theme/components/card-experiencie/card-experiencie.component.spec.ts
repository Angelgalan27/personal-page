import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperiencieComponent } from './card-experiencie.component';

describe('CardExperiencieComponent', () => {
  let component: CardExperiencieComponent;
  let fixture: ComponentFixture<CardExperiencieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExperiencieComponent]
    });
    fixture = TestBed.createComponent(CardExperiencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
