import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviPageRoutingModule } from './suivi-routing.module';

import { SuiviPage } from './suivi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviPageRoutingModule
  ],
  declarations: [SuiviPage]
})
export class SuiviPageModule {}
