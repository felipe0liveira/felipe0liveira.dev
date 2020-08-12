import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ArrayService } from '../utils/array.service';

import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  $products: Observable<Product[]>;
  $availableProducts: Observable<Product[]>;
  busy: boolean;
  constructor(
    private database: AngularFireDatabase,
    public arrayService: ArrayService
  ) {
    this.busy = false;
  }

  refresh() {
    this.busy = true;
    this.database.database.ref('marketplace/products').once(
      'value',
      (snapshot) => {
        const databaseProducts = snapshot.val();
        const products: Product[] = [];
        for (const key in databaseProducts) {
          databaseProducts[key].id = key;
          products.push(databaseProducts[key]);
        }
        this.$products = new Observable((o) => o.next(products));
        this.$availableProducts = new Observable((o) => {
          let availableProducts = products.filter((p) => p.status);
          availableProducts = this.arrayService.shuffle(availableProducts);
          o.next(availableProducts);
        });
        this.busy = false;
      },
      (_) => (this.busy = false)
    );
  }

  insert(product: Product): void {
    this.busy = true;
    product.update_time = new Date().getTime().toString();
    this.database
      .list('marketplace/products')
      .push(product)
      .then(() => this.refresh())
      .finally(() => (this.busy = false));
  }

  update(product: Product, key: string): void {
    this.busy = true;
    this.database.database
      .ref(`marketplace/products/${key}`)
      .update(product)
      .then(() => this.refresh())
      .finally(() => (this.busy = false));
  }

  delete(key: string): void {
    this.busy = true;
    this.database.database
      .ref(`marketplace/products/${key}`)
      .remove()
      .then(() => this.refresh())
      .finally(() => (this.busy = false));
  }
}
