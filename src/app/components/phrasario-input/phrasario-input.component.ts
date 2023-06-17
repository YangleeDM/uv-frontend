import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'phrasario-input',
  templateUrl: './phrasario-input.component.html',
  styleUrls: ['./phrasario-input.component.scss'],
})
export class PhrasarioInputComponent  implements OnInit {

  @Input() placeholder : string = "Nombre de usuario";

  constructor() { }

  ngOnInit() {}

}
