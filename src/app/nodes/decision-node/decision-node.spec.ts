import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionNode } from './decision-node';

describe('DecisionNode', () => {
  let component: DecisionNode;
  let fixture: ComponentFixture<DecisionNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionNode],
    }).compileComponents();

    fixture = TestBed.createComponent(DecisionNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
