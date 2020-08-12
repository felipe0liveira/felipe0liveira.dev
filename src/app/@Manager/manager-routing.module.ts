import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerOutletComponent } from './manager-outlet/manager-outlet.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerOutletComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'marketplace', component: MarketplaceComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
