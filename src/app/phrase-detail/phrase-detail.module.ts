import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhraseDetailPageRoutingModule } from './phrase-detail-routing.module';

import { PhraseDetailPage } from './phrase-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhraseDetailPageRoutingModule
  ],
  declarations: [PhraseDetailPage]
})
export class PhraseDetailPageModule {}
