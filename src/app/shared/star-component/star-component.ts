import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.html',
  styleUrls: ['./star-component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  constructor() { }

  ngOnChanges(): void {
   this.starWidth=this.rating*86/5;
  }

}
