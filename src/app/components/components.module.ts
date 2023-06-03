import {NgModule} from "@angular/core";
import {PhraseComponent} from "./phrase-component/phrase.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations : [PhraseComponent],
  imports: [
    IonicModule
  ],
  exports : [PhraseComponent]
})

export class ComponentsModule {}
