import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime()
  {
      let i = 97;

      if(i % 2 == 0)
      {
        return [
          {"Result": i + " is not a prime number."}
        ]
      }
      else
      {
        return [
          {"Result": i + " is a prime number."}
        ]
      }
  }
}
