import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFigureComponent } from './page-figure.component';

describe('PageFigureComponent', () => {
  let component: PageFigureComponent;
  let fixture: ComponentFixture<PageFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
