import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNode } from './action-node';

describe('ActionNode', () => {
  let component: ActionNode;
  let fixture: ComponentFixture<ActionNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionNode],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
