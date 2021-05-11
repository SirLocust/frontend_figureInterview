import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereteFigureComponent } from './generete-figure.component';

describe('GenereteFigureComponent', () => {
  let component: GenereteFigureComponent;
  let fixture: ComponentFixture<GenereteFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereteFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereteFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
