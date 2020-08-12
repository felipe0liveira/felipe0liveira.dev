import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[];

  constructor() {
    this.categories = [
      {
        name: 'Books',
        value: 'book',
        icon: 'book',
      },
      {
        name: 'Gadgets',
        value: 'gadget',
        icon: 'microchip',
      },
    ];
  }

  getIconByValue = (categoryValue: string) =>
    this.categories.find((v) => v.value === categoryValue).icon;
}
