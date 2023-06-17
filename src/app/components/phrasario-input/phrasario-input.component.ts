import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'phrasario-input',
  templateUrl: './phrasario-input.component.html',
  styleUrls: ['./phrasario-input.component.scss'],
})
export class PhrasarioInputComponent  implements OnInit {

  @Input() placeholder : string = "Nombre de usuario";
  @Input() inputValue : string | null = null;

  @Output() onInputValueChange = new EventEmitter();

  private timeout : any = null;

  constructor() { }

  ngOnInit() {}

  public onInputChange() {
    if(!this.inputValue) return;

    this.timeout && clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log("Enviando!")
      this.onInputValueChange.emit(this.inputValue);
    }, 500)
  }

}
