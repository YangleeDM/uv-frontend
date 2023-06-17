import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhraseDetailPageRoutingModule } from './phrase-detail-routing.module';

import { PhraseDetailPage } from './phrase-detail.page';
import {ComponentsModule} from "../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PhraseDetailPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PhraseDetailPage]
})
export class PhraseDetailPageModule {}
