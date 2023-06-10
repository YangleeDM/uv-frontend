import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}


export interface PhraseInfo {
  author : string,
  phrase : string
}

