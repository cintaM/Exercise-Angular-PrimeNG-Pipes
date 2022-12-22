import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { BasicsComponent } from './sales/pages/basics/basics.component';
import { OrderingComponent } from './sales/pages/ordering/ordering.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { WearComponent } from './sales/pages/wear/wear.component';


const routes: Routes = [
{
  path:'',
  component: BasicsComponent,
  pathMatch: 'full'
},
{
  path:'numbers',
  component: NumbersComponent
},
{
  path:'wear',
  component: WearComponent
},
{
  path:'ordering',
  component: OrderingComponent
},
{
  path:'**',
  redirectTo:''
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRouterModule { }
