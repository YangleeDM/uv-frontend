import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhraseDetailPage } from './phrase-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PhraseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhraseDetailPageRoutingModule {}
