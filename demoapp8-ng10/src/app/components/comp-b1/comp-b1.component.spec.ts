import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB1Component } from './comp-b1.component';

describe('CompB1Component', () => {
  let component: CompB1Component;
  let fixture: ComponentFixture<CompB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
