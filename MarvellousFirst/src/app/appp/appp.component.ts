import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-appp',
  templateUrl: './appp.component.html',
  styleUrls: ['./appp.component.css']
})
export class ApppComponent
{
  @Input() public Data : any;
}
