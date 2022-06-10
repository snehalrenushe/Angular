import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent
{
  
  public str : string = "Marvellous Infosystems";
  public name : string = "Marvellous Infosystems";
  Fun()
  {
    return this.str;
  }

  Check()
  {
    this.str = "Educating for Better tomorrow. (When click on button)"
  }

  Upper()
  {
    this.str = "MARVELLOUS INFOSYSTEMS (When click upper button)"
  }

  Lower()
  {
    this.str = "marvellous infosystem (When click lower button)"
  }
}
