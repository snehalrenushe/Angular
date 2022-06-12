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
import { NewDemoComponent } from './new-demo/new-demo.component';
import { ArithmeticService } from './arithmetic.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NewChildComponent } from './new-child/new-child.component';

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
    ApppComponent,
    NewDemoComponent,
    Child1Component,
    Child2Component,
    NewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArithmeticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
