import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template: `<h2>Inside Child1 Component</h2>
  <ul *ngFor = "let value of ans">
    <li>{{value.Result}}</li>
  </ul>
  `
})
export class Child1Component implements OnInit 
{
  public ans : any;

  constructor(private _obj:NumberService) { }

  ngOnInit(): void 
  {
    this.ans = this._obj.ChkPrime();
  }

}
