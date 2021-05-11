import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generete-figure',
  templateUrl: './generete-figure.component.html',
  styleUrls: ['./generete-figure.component.scss']
})
export class GenereteFigureComponent implements OnInit {
  positions: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  form: FormGroup;
  idGroupFigure:string;
  constructor() {
    
   }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm():FormGroup{
    return new FormGroup({
      nameFigure: new FormControl('',Validators.required)
    });
  }

  toggleItem(index: number): void{
    this.positions[index] = this.reverseNumber(this.positions[index]);
  }

  private reverseNumber(num: number){
    if(num === 0){
      return 1;
    }
    return 0;
  }


}
