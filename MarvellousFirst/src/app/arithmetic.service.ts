import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add()
  {
    return [
      {"arith" : 10 + 20}
    ]
  }

  public Sub()
  {
    return [
      {"arith" : 10 - 20}
    ]
  }
}
