import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

currentProduit!: Produit
categories!: Categorie[]
updatedCatId!: number

constructor(private produitService: ProduitService,
  private activateRoute: ActivatedRoute,
  private router: Router
  ){}


  ngOnInit(): void {
    // this.categories = this.produitService.listeCategorie()
    const id = this.activateRoute.snapshot.params["id"]
    //console.log(id);
    this.currentProduit = this.produitService.consulterProduit(id)
    //console.log(this.currentProduit);
    this.updatedCatId = this.currentProduit.categorie.idCat

  }
  updateProduit(){
    // this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId)
    this.produitService.updateProduit(this.currentProduit)
    this.router.navigateByUrl("/produits")
  }

}
