import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFigureGroupComponent } from './select-figure-group.component';

describe('SelectFigureGroupComponent', () => {
  let component: SelectFigureGroupComponent;
  let fixture: ComponentFixture<SelectFigureGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFigureGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFigureGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
