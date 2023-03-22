import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wordToBeReversed: any;
  unsortedWords: string[] = ['Gabriel', 'Arthur', 'Joel', 'Ellie', 'Alloy'];

}
