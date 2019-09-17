import { Component, OnInit } from '@angular/core';
import { CdkDropList, CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { DropZoneService } from '../../service/drop-zone.service'
import { Item } from '../../interface/item';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
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

  canvasItems: Item[] = [];

  constructor(private dropZones: DropZoneService) { }

  ngOnInit() {
  }

  // drop(event: CdkDragDrop<any[]>) {
  //
  //   // if drop event is from an item that was already on canvas
  //   if (event.container === event.previousContainer) {
  //     // sort it based on where it was dropped
  //     this.dropZones.moveInList(event);
  //   } else {
  //     // else the event was from a dropped palette item so add it to the list
  //     copyArrayItem(event.previousContainer.data, event.container.data, 0, event.currentIndex);
  //     this.decrementCount(event.previousContainer);
  //     // console.log({event});
  //   }
  //
  //   console.log()
  //
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer, event.container)
      debugger
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  decrementCount(previousContainer) {
    previousContainer.data[0].count--;
    console.log(previousContainer.data);
  }

}
