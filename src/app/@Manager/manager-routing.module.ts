import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerOutletComponent } from './manager-outlet/manager-outlet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerOutletComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'marketplace', component: MarketplaceComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
