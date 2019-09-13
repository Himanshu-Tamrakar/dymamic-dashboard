import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as _ from 'underscore';


@Component({
  selector: 'app-drag-rop',
  templateUrl: './drag-rop.component.html',
  styleUrls: ['./drag-rop.component.scss']
})
export class DragRopComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
 //  timePeriods = [
 //   'Bronze age',
 //   'Iron age',
 //   'Middle ages',
 //   'Early modern period',
 //   'Long nineteenth century'
 // ];
 //
 // drop(event: CdkDragDrop<string[]>) {
 //   moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
 // }

 todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  prodDone = [
    'prod-Get up',
    'prod-Brush teeth',
    'prod-Take a shower',
    'prod-Check e-mail',
    'prod-Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    console.log(this.todo, this.done, this.prodDone);
  }

}
