CREATE DATABASE IF NOT EXISTS produits;

USE produits;

CREATE TABLE IF NOT EXISTS produits (
  idProduit INT PRIMARY KEY,
  nomProduit VARCHAR(255),
  prixProduit FLOAT,
  dateCreation DATE
);

INSERT INTO produits (idProduit, nomProduit, prixProduit, dateCreation)
  VALUES (1, 'Produit A', 10.5, '2023-05-12');
INSERT INTO produits (idProduit, nomProduit, prixProduit, dateCreation)
  VALUES (2, 'Produit B', 15.8, '2023-05-12');
