import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactezPage } from './contactez.page';

const routes: Routes = [
  {
    path: '',
    component: ContactezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactezPageRoutingModule {}
