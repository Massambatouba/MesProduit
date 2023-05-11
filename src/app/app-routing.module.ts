import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './components/produits/produits.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';

const routes: Routes = [
 {
  path: "produits", component: ProduitsComponent
  },
  {
    path: "add-produit", component: AddProduitComponent
  },
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
