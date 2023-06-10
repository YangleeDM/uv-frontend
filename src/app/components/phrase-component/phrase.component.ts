import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-phrase-component',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.scss'],
})

export class PhraseComponent implements OnInit {

  @Input() phraseItem : PhraseInfo = {
    author : 'Jorge Arturo',
    phrase : 'Arriba las chivas'
  }

  @Output() onPhraseClicked : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  public onCardClicked() : void {
    this.onPhraseClicked.emit(this.phraseItem)
  }

}


export interface PhraseInfo {
  author : string,
  phrase : string
}

