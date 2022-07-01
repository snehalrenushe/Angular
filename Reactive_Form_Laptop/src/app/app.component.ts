import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder,Validators,MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(public fbobj : FormBuilder)
  {
  }

  statelist:any = ['Maharashtra', 'Gujrat', 'Uttarpradesh']

  LaptopSupport = this.fbobj.group(
    {
      firstname : ['', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z ]*$')]],
      lastname : [''],
      email : ['',[Validators.required,Validators.email]],
      mobile : ['', [Validators.required, Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      city : ['',[Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]],
      zipcode : ['',[Validators.maxLength(5),Validators.pattern('^[0-9]*$')]],
      Comment : ['',[Validators.minLength(30)]]   
    }
  );

  submit()
  {
    console.log(this.fbobj.group);
  }

  SetData()
  {
    this.LaptopSupport.setValue(
      {
        firstname : 'Snehal',
        lastname : 'Renushe',
        email : 'snehalrenushe@gmail.com',
        modile : '8425921120',
        city: 'Karad',
        state : 'Maharashtra',
        zipcode: '415305',
        comment : 'hiee'
      }
    )
  }

  
}
