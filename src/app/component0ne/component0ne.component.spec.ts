import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component0neComponent } from './component0ne.component';

describe('Component0neComponent', () => {
  let component: Component0neComponent;
  let fixture: ComponentFixture<Component0neComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component0neComponent]
    });
    fixture = TestBed.createComponent(Component0neComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
