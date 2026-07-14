import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerNode } from './trigger-node';

describe('TriggerNode', () => {
  let component: TriggerNode;
  let fixture: ComponentFixture<TriggerNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerNode],
    }).compileComponents();

    fixture = TestBed.createComponent(TriggerNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
