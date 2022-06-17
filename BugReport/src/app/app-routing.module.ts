import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'books',component:BooksComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'',component:TechnologiesComponent},
  {path:'**',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
