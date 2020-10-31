import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';


const routes: Routes = [
  {path: '**', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
