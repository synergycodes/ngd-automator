import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNodePanel } from './action-node-panel';

describe('ActionNodePanel', () => {
  let component: ActionNodePanel;
  let fixture: ComponentFixture<ActionNodePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionNodePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionNodePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
