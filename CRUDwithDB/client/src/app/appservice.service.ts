import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService
{
  constructor(private http : HttpClient)
  { }

  getBatches()
  {
    return this.http.get('/api/getBatches');
  }

  connect()
  {
    return this.http.get('/api/connect');
  }
}