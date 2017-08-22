import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
