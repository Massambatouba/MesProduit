import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  categories!: Categorie[]
  message!: string
  newIdCat!: number
  newCategorie!: Categorie

  constructor(private produitService: ProduitService,
              private router: Router
    ){}

  ngOnInit(): void {
    // this.categories = this.produitService.listeCategorie();
  }

  newProduit =  new Produit();


  onAddProduit(){
    // this.newCategorie = this.produitService.consulterCategorie(this.newIdCat)
    this.newProduit.categorie = this.newCategorie
    this.produitService.addProduit(this.newProduit);
    // this.message = `Produit ${this.newProduit.nomProduit} est ajouté avec succés`
    this.router.navigateByUrl("/produits")


  }
}
