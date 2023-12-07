import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEducationComponent } from './card-education.component';

describe('CardEducationComponent', () => {
  let component: CardEducationComponent;
  let fixture: ComponentFixture<CardEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEducationComponent]
    });
    fixture = TestBed.createComponent(CardEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
