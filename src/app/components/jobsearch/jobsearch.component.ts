import { Component } from '@angular/core';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent {

  onSubmit(){

    window.location.href = 'https://wa.me/6282114803327';
  }

}
