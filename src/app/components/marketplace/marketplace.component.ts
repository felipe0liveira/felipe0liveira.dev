import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from 'src/app/services/marketplace-service/marketplace.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  constructor(public marketplaceService: MarketplaceService) {}

  ngOnInit(): void {
    this.marketplaceService.update();
  }
}
