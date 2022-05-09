import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposPageRoutingModule } from './propos-routing.module';

import { ProposPage } from './propos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposPageRoutingModule
  ],
  declarations: [ProposPage]
})
export class ProposPageModule {}
