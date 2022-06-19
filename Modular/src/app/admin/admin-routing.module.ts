import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdemoComponent } from './ademo/ademo.component';

const routes: Routes = [
  {path:'',component:AdemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
