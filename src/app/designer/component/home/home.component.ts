import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as _ from 'underscore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



 todo = [
    'Google',
    'Facebook',
    'ISRO',
    'Apple',
    // 'Get to work1',
    // 'Pick up groceries1',
    // 'Go home1',
    // 'Fall asleep1',
    // 'Get to work2',
    // 'Pick up groceries2',
    // 'Go home2',
    // 'Fall asleep2',
    // 'Get to work3',
    // 'Pick up groceries3',
    // 'Go home3',
    // 'Fall asleep3',
    // 'Get to work4',
    // 'Pick up groceries4',
    // 'Go home4',
    // 'Fall asleep4',
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    // 'Walk dog'
  ];

  prodDone = [
    'prod-Get up',
    'prod-Brush teeth',
    'prod-Take a shower',
    'prod-Check e-mail',
    // 'prod-Walk dog'
  ];


  sideOption = ['H', 'H', 'S', 'Y']

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer, event.container)

      if(event.container.id != 'cdk-drop-list-0') transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
