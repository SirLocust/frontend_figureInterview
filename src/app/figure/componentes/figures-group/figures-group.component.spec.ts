import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresGroupComponent } from './figures-group.component';

describe('FiguresGroupComponent', () => {
  let component: FiguresGroupComponent;
  let fixture: ComponentFixture<FiguresGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguresGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguresGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
