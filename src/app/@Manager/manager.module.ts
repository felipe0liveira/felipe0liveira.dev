import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagerOutletComponent } from './manager-outlet/manager-outlet.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagerOutletComponent,
    MarketplaceComponent,
  ],
  imports: [CommonModule, ManagerRoutingModule],
})
export class ManagerModule {}
