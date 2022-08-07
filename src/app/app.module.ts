import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpperMenuComponent } from './price-tracker-site/upper-menu/upper-menu.component';
import { BaseComponent } from './price-tracker-site/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperMenuComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
