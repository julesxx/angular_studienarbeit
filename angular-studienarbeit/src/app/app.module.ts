import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

import { RouterModule, Routes } from '@angular/router';
import {LoginService} from "./login.service";



const appRoutes: Routes = [
  { path: 'todoList', component: DatatableComponent },
  { path: 'contact',      component:LoginComponentComponent},
  { path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    HomeComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
