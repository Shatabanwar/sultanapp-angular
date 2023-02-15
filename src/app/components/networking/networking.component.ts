import { Component } from '@angular/core';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.css']
})
export class NetworkingComponent {

  onSubmit(){

    window.location.href = 'https://wa.me/6282114803327';
  }

}
