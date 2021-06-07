import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignINComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SelectCategoryComponent } from './select-category/select-category.component';

import { OffreDetailsComponent } from './offre-details/offre-details.component';
import {ProfileComponent} from "../app/components/profile/profile.component"





const routes: Routes = [
  {path:"",  component: SignINComponent},
  {path:"SignUp", component: SignUpComponent},
  {path:"Home",pathMatch:'full', component: MainPageComponent},
  {path:"Profile", component: ProfileComponent},

  {path:"Category", component: SelectCategoryComponent},
 
  {path:"OffreDetails", component: OffreDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
