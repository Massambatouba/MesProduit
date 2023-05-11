import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
currentProduit!: Produit
constructor(private produitService: ProduitService,
  private activateRoute: ActivatedRoute,
  private router: Router
  ){}


  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params["id"]
    console.log(id);

    this.currentProduit = this.produitService.consulterProduit(id)
    console.log(this.currentProduit);

  }
  updateProduit(){
    this.produitService.updateProduit(this.currentProduit)
    this.router.navigateByUrl("/produits")
  }

}
