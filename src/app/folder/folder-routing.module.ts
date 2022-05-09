import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'contactez',
    loadChildren: () => import('./contactez/contactez.module').then( m => m.ContactezPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'propos',
    loadChildren: () => import('./propos/propos.module').then( m => m.ProposPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  },
  {
    path: 'siteweb',
    loadChildren: () => import('./siteweb/siteweb.module').then( m => m.SitewebPageModule)
  },
  {
    path: 'points',
    loadChildren: () => import('./points/points.module').then( m => m.PointsPageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./promotions/promotions.module').then( m => m.PromotionsPageModule)
  },
 
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'suivi',
    loadChildren: () => import('./suivi/suivi.module').then( m => m.SuiviPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
