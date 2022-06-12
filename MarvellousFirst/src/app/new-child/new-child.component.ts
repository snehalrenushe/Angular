import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-new-child',
  template: `<h2>Inside child Component.</h2>
  <ul *ngFor = "let value of ans">
    <li>{{value.Result}}</li>
  </ul>
  <ul *ngFor = "let value of str">
    <li>{{value.Res}}</li>
  </ul>
  `  
})
export class NewChildComponent implements OnInit 
{
  public ans : any;
  public str : any;

  constructor(private _obj:NumberService,private _obj2:StringService) { }

  ngOnInit(): void 
  {
    this.ans = this._obj.ChkPrime();
    this.str = this._obj2.CountCapital();
  }

}
