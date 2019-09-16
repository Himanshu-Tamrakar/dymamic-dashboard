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
    alert()
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

}
