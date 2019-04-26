import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

const routes: Routes = [
  { path: '', component:  UserProfileComponent}
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [RouterModule]
})
export class UserProfileModule { }
