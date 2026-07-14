import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNodePanel } from './result-node-panel';

describe('ResultNodePanel', () => {
  let component: ResultNodePanel;
  let fixture: ComponentFixture<ResultNodePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultNodePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultNodePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
