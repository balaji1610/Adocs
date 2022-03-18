import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  template: '<h1 class="text bg">Declare Template & Style</h1>',
  styles: ['.bg { color:blue; }']
})
export class ReviewComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
