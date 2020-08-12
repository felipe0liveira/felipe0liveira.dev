import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerOutletComponent } from './manager-outlet/manager-outlet.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagerOutletComponent,
    MarketplaceComponent,
  ],
  imports: [CommonModule, ManagerRoutingModule, ReactiveFormsModule],
})
export class ManagerModule {}
