import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-list',
  template: `
    <p>
      Hello! This is an Angular app
    </p>
  `,
  styles: [
  ]
})
export class HelloListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
