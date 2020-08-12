import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from 'src/app/services/marketplace-service/marketplace.service';
import { WindowsService } from 'src/app/services/windows-service/windows.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  constructor(
    public windowsService: WindowsService,
    public marketplaceService: MarketplaceService
  ) {}

  ngOnInit(): void {
    this.marketplaceService.refresh();
  }

  goToProduct(product: Product): void {
    window.open(product.link, '_blank');
  }
}
