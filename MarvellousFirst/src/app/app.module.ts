import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { DemoComponent } from './demo/demo.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildComponent } from './child/child.component';
import { ApppComponent } from './appp/appp.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FirstCompComponent,
    SecondCompComponent,
    NewCompComponent,
    FirstComponent,
    SecondComponent,
    ChildComponent,
    ApppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
