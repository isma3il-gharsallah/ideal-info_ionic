import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactezPageRoutingModule } from './contactez-routing.module';

import { ContactezPage } from './contactez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactezPageRoutingModule
  ],
  declarations: [ContactezPage]
})
export class ContactezPageModule {}
