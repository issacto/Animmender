import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {IndividualPageComponent} from './individual-page/individual-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'individualpage/:id', component: IndividualPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
