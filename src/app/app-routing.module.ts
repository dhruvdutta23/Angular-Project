import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {dashBoardComponent} from './dashboard/dashboard.component';
import {detailsComponent} from './details/details.component';
import {addRecordComponent} from './addRecord/addRecord.component';
import {logInComponent} from './logIn.component';

const routes: Routes = [
  {path:'', component: logInComponent},
  {path:'details', component:detailsComponent},
  {path:'dashboard', component:dashBoardComponent},
  {path:'add', component: addRecordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
