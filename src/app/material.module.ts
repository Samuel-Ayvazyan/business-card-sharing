import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
    MatInputModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule,
    MatCardModule, MatToolbarModule, MatFormFieldModule, MatMenuModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule,
    MatCardModule, MatToolbarModule, MatFormFieldModule, MatMenuModule,
  ],
  exports: [
    CommonModule,
    MatInputModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule,
    MatCardModule, MatToolbarModule, MatFormFieldModule, MatMenuModule,
  ],
  declarations: []
})
export class MaterialModule { }
