import { FiguresService } from './../../../core/services/figures/figures.service';
import { FigureObj } from './../../../core/services/models/figure';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generete-figure',
  templateUrl: './generete-figure.component.html',
  styleUrls: ['./generete-figure.component.scss'],
})
export class GenereteFigureComponent implements OnInit {
  positions: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  form: FormGroup;
  idGroupFigure: string;
  constructor(private figureService: FiguresService) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      nameFigure: new FormControl('', Validators.required),
    });
  }

  toggleItem(index: number): void {
    if(index === 12){
      return;
    }
    this.positions[index] = this.reverseNumber(this.positions[index]);
  }

  private reverseNumber(num: number): number {
    
    if (num === 0 ) {
      return 1;
    }
    return 0;
  }

  createFigure(): void {
    if (!this.form.valid) {
      return;
    }
    const figureNew: FigureObj = {
      idFigureGroup: Number(this.idGroupFigure),
      positions: this.positions,
      
      figureName: this.form.get('nameFigure').value,
    };
    
    this.figureService.addFigureToStore(figureNew);
  }

}
