import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalOutletComponent } from './router-outlet/personal-outlet.component';

import { HomeComponent } from './pages/home/home.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';

@NgModule({
  declarations: [HomeComponent, PersonalOutletComponent, BusinessCardComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
