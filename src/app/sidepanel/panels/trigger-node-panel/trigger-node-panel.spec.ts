import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerNodePanel } from './trigger-node-panel';

describe('TriggerNodePanel', () => {
  let component: TriggerNodePanel;
  let fixture: ComponentFixture<TriggerNodePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerNodePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(TriggerNodePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
