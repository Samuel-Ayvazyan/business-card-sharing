import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-profile',
    loadChildren: './modules/user-profile/user-profile.module#UserProfileModule',
  },
  {
    path: 'cards-list',
    loadChildren: './modules/business-cards/business-cards.module#BusinessCardsModule',
  },
  {
    path: '**',
    redirectTo: '/cards-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
