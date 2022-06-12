import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `<h2>Inside child2 Component</h2>
  <ul *ngFor = "let value of str">
    <li>{{value.Res}}</li>
  </ul>
  `
})
export class Child2Component implements OnInit 
{
  public str : any;

  constructor(private _obj:StringService) { }

  ngOnInit(): void 
  {
    this.str = this._obj.CountCapital();
  }

}
