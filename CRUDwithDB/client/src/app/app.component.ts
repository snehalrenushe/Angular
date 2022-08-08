import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './appservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  title = 'client';

  constructor(private service : AppServiceService)
  {}
   
  ngOnInit()
  {
    this.getBathesfromAPI()
    this.connect();
  }

  getBathesfromAPI()
  {
       this.service.getBatches().subscribe((Response)=>{
      console.log("Data from server : ",Response);
    }); 
  }

  connect()
  {
    this.service.connect().subscribe((Response) => {
      console.log("Data from server",Response);
    })
  }
}