import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})

export class FirstComponent
{
  //Characteristics
  name:string = "Snehal Sanjay Renushe.";

  //Behaviour
  Display():string
  {
    var ret:string = "Hello "+this.name;
    return ret;
  }

  Addition(no1:number,no2:number):number
  {
    return no1+no2;
  }
}

//var obj = new FirstComponent();
