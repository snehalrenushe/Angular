import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { MarvellousComponent } from './marvellous/marvellous.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EventComponent } from './event/event.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgWhileComponent } from './ng-while/ng-while.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { WservBatchlistComponent } from './wserv-batchlist/wserv-batchlist.component';
import { WservBatchdetailsComponent } from './wserv-batchdetails/wserv-batchdetails.component';
import { BatchserviceService } from './batchservice.service';
import {HttpClientModule} from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    FirstComponent,
    SecondComponent,
    EventComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgWhileComponent,
    NgSwitchComponent,
    ChildComponent,
    ParentComponent,
    TwoWayDataBindingComponent,
    BatchlistComponent,
    BatchdetailsComponent,
    WservBatchlistComponent,
    WservBatchdetailsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BatchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
