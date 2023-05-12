import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits!: Produit[];

  constructor(private produitService: ProduitService, private router: Router){

  }
  ngOnInit(): void {
    this.produitService.getListeProduit().subscribe(
      produitsListe =>this.produits = produitsListe
    )
  }
  supprimerProduit(produit: Produit){
    let conf = confirm("Etes vous sur de vouloir supprimer ce produit ?")
    if(conf){
      this.produitService.supprimerProduit(produit.idProduit)
      .subscribe(()=>{
        this.router.navigateByUrl("/produits")

      })
    }
  }
}
