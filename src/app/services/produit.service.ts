import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits!: Produit[];

  constructor() {
     this.produits = [
      {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
       ];
   }
   listeProduit(): Produit[]{
    return this.produits
   }
   addProduit(produit: Produit){
      this.produits.push(produit);
   }
   supprimerProduit(produit: Produit){
    const index = this.produits.indexOf(produit, 0);
    if(index > -1){
      this.produits.splice(index, 1)
    }
   }
   consulterProduit(id: number): Produit{
    return this.produits.find(p => p.idProduit == id)!;

  }
  updateProduit(produit: Produit){
    this.supprimerProduit(produit);
    this.addProduit(produit)
    this.trierProduits()
  }
  trierProduits(){
    this.produits = this.produits.sort((n1, n2) =>{
      if(n1.idProduit! >n2.idProduit!){
        return 1;
      }
      if(n1.idProduit! < n2.idProduit!){
        return -1;
      }
      return 0;
    });
  }
}
