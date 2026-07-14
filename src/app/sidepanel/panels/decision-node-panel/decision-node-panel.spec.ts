import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionNodePanel } from './decision-node-panel';

describe('DecisionNodePanel', () => {
  let component: DecisionNodePanel;
  let fixture: ComponentFixture<DecisionNodePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionNodePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(DecisionNodePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
