import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import {CurrencyPipe} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component'

import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    FooterComponent,
    DiversaoComponent,
    RestaurantesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
