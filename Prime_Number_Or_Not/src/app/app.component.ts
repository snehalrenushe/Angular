import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public value:any;

  public str : string = '';
  public i: any = 2;

  // public Send(data : any)
  // {
  //   this.value = data;
  // }

  public Check(data : any)
  {
    for(data;data>this.i;this.i++)
    {
        if(data % this.i==0)
        {
            break;
        }
    }
    if(data==this.i)
    {
        console.log("Prime Number");
        this.str = data + " is Prime Number";
    }
    else
    {
      console.log("Composite Number");
      this.str = data + " Composite Number";
    }
  }

}
