import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { WearComponent } from './pages/wear/wear.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumbersComponent,
    WearComponent,
    BasicsComponent,
    OrderingComponent
  ],
  exports: [
    NumbersComponent,
    WearComponent,
    BasicsComponent,
    OrderingComponent
  ],

  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
