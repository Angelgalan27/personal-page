import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkillComponent } from './card-skill.component';

describe('CardSkillComponent', () => {
  let component: CardSkillComponent;
  let fixture: ComponentFixture<CardSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSkillComponent]
    });
    fixture = TestBed.createComponent(CardSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
