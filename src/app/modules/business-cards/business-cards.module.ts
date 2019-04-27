import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessCardsComponent } from './business-cards.component';
import { MaterialModule } from 'src/app/material.module';

const routes: Routes = [
  { path: '', component:  BusinessCardsComponent}
];

@NgModule({
  declarations: [BusinessCardsComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
  ],
})
export class BusinessCardsModule { }
