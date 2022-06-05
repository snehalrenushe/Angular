import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent 
{
  @Output() public Myevent = new EventEmitter();

  public str = "Hello Parent";
  public SendMessage()
  {
    this.Myevent.emit(this.str);
  }
}
