import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    SubjectsComponent,
    AboutusComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
