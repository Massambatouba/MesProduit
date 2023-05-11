import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  message!: string
  constructor(private produitService: ProduitService){}

  ngOnInit(): void {
  }

  newProduit =  new Produit();


  onAddProduit(){
    this.produitService.addProduit(this.newProduit);
    this.message = `Produit ${this.newProduit.nomProduit} est ajouté avec succés`


  }
}
