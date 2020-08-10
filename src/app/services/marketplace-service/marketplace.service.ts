import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  productList: Observable<Product[]>;
  constructor(private database: AngularFireDatabase) {}

  update() {
    this.database.database
      .ref('marketplace/products')
      .on('value', (snapshot) => {
        const databaseProducts = snapshot.val();
        const products: Product[] = [];
        for (const key in databaseProducts) {
          products.push(databaseProducts[key]);
        }
        this.productList = new Observable((o) => o.next(products));
      });
  }

  insert(product: Product) {
    this.database
      .list('marketplace/products')
      .push(product)
      .then((result) => {
        console.log('insert', result);
      });
  }
}
