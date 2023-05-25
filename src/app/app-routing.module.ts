import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';

const routes: Routes = [
  { path: 'experiencia', component: ExpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
