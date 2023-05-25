import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiencia', component: ExpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
