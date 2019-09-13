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

  ngOnInit() { }


  timePeriods = [
    'Google',
    'Facebook',
    'Apple',
    'Micro Soft',
    'Slack',
    'Air bus',
    'Service Now',
    'ISRO'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

}
