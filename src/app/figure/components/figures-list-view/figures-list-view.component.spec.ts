import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresListViewComponent } from './figures-list-view.component';

describe('FiguresListViewComponent', () => {
  let component: FiguresListViewComponent;
  let fixture: ComponentFixture<FiguresListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguresListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguresListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
