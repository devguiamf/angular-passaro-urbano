import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLinkActive } from '@angular/router';


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
import {MatTabsModule} from '@angular/material/tabs';
import { routes } from './app-routing.module';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { DescricaoReduzida } from './util/descricao-reduzida-pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar'



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    FooterComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    OndeFicaComponent,
    OrdemCompraComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterLinkActive,
    MatTabsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
],
  providers: [CurrencyPipe,DescricaoReduzida],
  bootstrap: [AppComponent]
})
export class AppModule { }
