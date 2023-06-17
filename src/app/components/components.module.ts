import {NgModule} from "@angular/core";
import {PhraseComponent} from "./phrase-component/phrase.component";
import {IonicModule} from "@ionic/angular";
import {CommentComponent} from "./comment/comment.component";
import {PhrsarioToolbarComponent} from "./phrsario-toolbar/phrsario-toolbar.component";


@NgModule({
  declarations : [PhraseComponent, CommentComponent, PhrsarioToolbarComponent],
  imports: [
    IonicModule
  ],
  exports : [PhraseComponent, CommentComponent, PhrsarioToolbarComponent]
})

export class ComponentsModule {}
