import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zero-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'from-zero';
  content = 'Welcome do Meat App!'

  constructor() { 

  }
  
  ngOnInit(): void {
     
  }
}
