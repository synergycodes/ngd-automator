import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNode } from './result-node';

describe('ResultNode', () => {
  let component: ResultNode;
  let fixture: ComponentFixture<ResultNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultNode],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
