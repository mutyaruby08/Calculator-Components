import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator-Components';
  n1 = 0;
  n2 = 0;

  num1(n1: number){
    this.n1 = n1;
  }

  num2(n2: number){
    this.n2 = n2;
  }
}
