import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentTypeListComponent } from './components/contenttype-list.component';
import { CompanytListComponent } from './components/company-list/company-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/contenttypes', pathMatch: 'full' },
  { path: 'contenttypes', component: ContentTypeListComponent },
  { path: 'insuranceCompanies', component: CompanytListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
