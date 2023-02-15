import { Component } from '@angular/core';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent {


  onSubmit(){

    window.location.href = 'https://wa.me/6282114803327';
  }
}
