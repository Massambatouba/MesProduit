import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './components/produits/produits.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';

const routes: Routes = [
 {
  path: "produits", component: ProduitsComponent
  },
  {
    path: "add-produit", component: AddProduitComponent
  },
  {
    path: "updateProduit/:id", component: UpdateProduitComponent
  },

  //derniere route
  {
    path: "", redirectTo: "produits", pathMatch: "full"
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
