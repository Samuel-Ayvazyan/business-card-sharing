import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessCardsComponent } from './business-cards.component';
import { MaterialModule } from 'src/app/material.module';
import { MatCardModule } from '@angular/material';

const routes: Routes = [
  { path: '', component:  BusinessCardsComponent}
];

@NgModule({
  declarations: [BusinessCardsComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    MatCardModule,
  ],
})
export class BusinessCardsModule { }
