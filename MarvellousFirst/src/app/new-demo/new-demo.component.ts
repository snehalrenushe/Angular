import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-new-demo',
  template: `<h2>Inside Demo Component</h2>
  <ul *ngFor = "let value of sum">
    <li>Addition is {{value.arith}}</li>
  </ul>
  <ul *ngFor = "let value of minus">
    <li>Substraction is {{value.arith}}</li>
  </ul>
  `
})
export class NewDemoComponent implements OnInit {

  public sum : any;
  public minus : any;

  constructor(private _obj : ArithmeticService) 
  { }

  ngOnInit(): void 
  {
    this.sum = this._obj.Add();
    this.minus = this._obj.Sub()
  }

}
