import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviPage } from './suivi.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviPageRoutingModule {}
