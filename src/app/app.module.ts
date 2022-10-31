import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CurrencyPipe} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
