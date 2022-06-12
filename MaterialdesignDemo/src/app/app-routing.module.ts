import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [                //routes : variable, Routes : Datatype
{path:'batches',component : BatchesComponent},
{path: 'subjects',component : SubjectsComponent},
{path: 'aboutus',component : AboutusComponent},
{path: '',component : AboutusComponent},
{path: '**',component : InvalidComponent}

];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{


}
