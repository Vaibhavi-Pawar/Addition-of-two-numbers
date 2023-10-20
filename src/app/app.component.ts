import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Addition2Numbers';
  firstNumber: string |any ;
  secondNumber: string |any;
  result: number |any;

  AddNumber()
  {
    this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }
}
