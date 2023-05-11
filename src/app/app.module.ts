import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
