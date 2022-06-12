import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StringService {

  constructor() { }

  public CountCapital()
  {
    let ch : string= "Marvellous Infosystems";
    let count : number = 0;
    
    for(let i = 0 ; i <= ch.length ; i++)
    {
      if(ch[i] >= 'A' && ch[i] <= 'Z')
      {
        count++;
      }
    }
    return [
      {"Res" : count + " Capital Letters."}
    ]
  }
}
