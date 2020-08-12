import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from 'src/app/services/marketplace-service/marketplace.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  productForm: FormGroup;
  formAction: string;
  editingKey: string;

  constructor(
    public marketplaceService: MarketplaceService,
    public categoryService: CategoryService
  ) {
    document.title = 'Felipe 0liveira - Manager/Marketplace (Win98)';
    this.formAction = 'insert';
    this.editingKey = '';
    this.productForm = new FormGroup({
      category: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(100),
      ]),
      status: new FormControl(true),
    });
  }

  ngOnInit(): void {
    this.marketplaceService.refresh();
  }

  clearForm(): void {
    this.formAction = 'insert';
    this.editingKey = '';

    this.productForm.reset();
    this.productForm.controls['status'].setValue(true);
    this.productForm.controls['category'].setValue('');
  }

  edit(product: Product): void {
    let editingProduct = product;

    this.editingKey = editingProduct.id;
    delete editingProduct.id;

    this.productForm.setValue(editingProduct);
    this.formAction = 'edit';
  }

  changeStatus(product: Product): void {
    let editingProduct = product;
    if (
      confirm(
        `Are you sure that you want to ${
          !editingProduct.status ? 'enable' : 'disable'
        } the product status?\n\nProduct Detail\n${editingProduct.title}`
      )
    ) {
      const _editingKey = editingProduct.id;
      delete editingProduct.id;
      editingProduct.status = !editingProduct.status;

      this.marketplaceService.update(product, _editingKey);
    }
  }

  delete(): void {
    if (confirm('Are you sure that you want to delete this product?')) {
      this.marketplaceService.delete(this.editingKey);
      this.clearForm();
    }
  }

  cancel(): void {
    if (confirm('Are you sure that you want to cancel editing form?')) {
      this.clearForm();
    }
  }

  submit(): void {
    if (this.productForm.valid) {
      if (this.formAction === 'edit') {
        this.marketplaceService.update(this.productForm.value, this.editingKey);
      } else {
        this.marketplaceService.insert(this.productForm.value);
      }
      this.clearForm();

      return;
    }

    alert(
      'There are invalid fields in form.\nPlease, check the fields again and submit!'
    );
  }
}
