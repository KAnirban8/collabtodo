import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowingdaraformComponent } from './showingdaraform/showingdaraform.component';
import { SubmitformComponent } from './submitform/submitform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowingdaraformComponent,
    SubmitformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
