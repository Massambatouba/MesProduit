import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits!: Produit[];
  categories!: Categorie[];
  apiURL: string = "http://localhost:8080/produits/api"


  constructor(private http: HttpClient) {
    // this.categories = [
    //   {idCat: 1, nomCat: "PC"},
    //   {idCat: 2, nomCat: "Imprimante"}
    // ]

    //  this.produits = [
    //   {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"), categorie: {idCat: 1, nomCat: "PC"} },
    //   {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"), categorie: {idCat: 2, nomCat: "Imprimante"}},
    //   {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"), categorie: {idCat: 1, nomCat: "PC"}}
    //    ];
   }
   private log(response: any){
    console.table(response)
   }
   private handleError(error: Error, errorValue: any){
    console.error(error)
    return of(errorValue)
   }
   getListeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL).pipe(
      tap((response) =>this.log(response)),
      catchError((error) => this.handleError(error, [])
    )
   )}
   addProduit(produit: Produit): Observable<null>{
      const httpOptions = {
        headers: new HttpHeaders({"content-type": 'application/json'})
      };
      return this.http.post(this.apiURL, produit, httpOptions).pipe(

        tap((response) =>this.log(response)),
        catchError((error) => this.handleError(error, [])
      )

      )
   }
   supprimerProduit(produitId: number): Observable<null>{
    return this.http.delete(`http://localhost:8080/produits/api/${produitId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error, null))
    )
   }
   consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`
    return this.http.get<Produit>(url)

  }
  updateProduit(produit: Produit){
   const httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
   };
   return this.http.put(this.apiURL, produit, httpOptions).pipe(
    tap((response)=> this.log(response)),
    catchError((error)=> this.handleError(error, undefined))
   )
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
  // listeCategorie():Categorie[]{
  //   return this.categories;
  // }
  // consulterCategorie(id: number): Categorie{
  //   return this.categories.find(cat => cat.idCat == id)!
  // }
}
