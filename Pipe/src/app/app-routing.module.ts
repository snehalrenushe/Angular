import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [                //routes : variable, Routes : Datatype
// {path:'batches',component : BatchesComponent},
// {path: 'subjects',component : SubjectsComponent},
// {path: 'aboutus',component : AboutusComponent},
// {path: '',component : AboutusComponent},
// {path: '**',component : InvalidComponent},


{path: 'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
{path: 'student',loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)},
{path: '',redirectTo:'',pathMatch:'full'}

];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{


}
