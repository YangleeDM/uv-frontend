import {NgModule} from "@angular/core";
import {PhraseComponent} from "./phrase-component/phrase.component";
import {IonicModule} from "@ionic/angular";
import {CommentComponent} from "./comment/comment.component";


@NgModule({
  declarations : [PhraseComponent, CommentComponent],
  imports: [
    IonicModule
  ],
  exports : [PhraseComponent, CommentComponent]
})

export class ComponentsModule {}
