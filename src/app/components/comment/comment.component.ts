import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent  implements OnInit {

  @Input() commentItem : CommentInfo = {
    authorName : 'Enrique Loyo',
    comment : 'Muchas gracias por compartir tus pensamientos, me alegra el día y me inspira siempre!'
  }

  constructor() { }

  ngOnInit() {}

}

export interface CommentInfo {
  authorName : string,
  comment : string
}
