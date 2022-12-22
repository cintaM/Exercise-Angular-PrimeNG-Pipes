import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';
import { AppRouterModule } from './app-router.module';


//cambiar el idioma de la app 
import localES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SalesModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue:'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
