import { Injectable } from '@angular/core';
import {IBatches} from './Batches';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({                 //decorator
  providedIn: 'root'
})

export class BatchserviceService 
{
  
  private URL = './assets/Data/Batches.json';

  constructor(private _obj:HttpClient) {}

  public GetBatches() : Observable<IBatches[]>
  {
    // return[
    //   {"Name":"PPA","Duration":4,"Fees":16500},
    //   {"Name":"LB","Duration":3,"Fees":17000},
    //   {"Name":"PYTHON","Duration":5,"Fees":15000}
    // ];

    return this._obj.get<IBatches[]>(this.URL);
  }

}
