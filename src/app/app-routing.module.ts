import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {IndividualPageComponent} from './individual-page/individual-page.component'
import {TypePageComponent} from "./type-page/type-page.component"

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'individualpage/:id', component: IndividualPageComponent,runGuardsAndResolvers: "always" },
  { path: 'typepagecomponent/:id', component: TypePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
