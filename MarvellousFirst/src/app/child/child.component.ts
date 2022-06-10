import { Component, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{

  public value:any;
  public SendMessage(data : any)
  {
    this.value = data;
  }

  public Name : any;
}
