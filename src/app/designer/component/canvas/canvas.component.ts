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

  canvasItems: Item[] = [];

  constructor(private dropZones: DropZoneService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {

    // if drop event is from an item that was already on canvas
    if (event.container === event.previousContainer) {
      // sort it based on where it was dropped
      this.dropZones.moveInList(event);
    } else {
      // else the event was from a dropped palette item so add it to the list
      copyArrayItem(event.previousContainer.data, event.container.data, 0, event.currentIndex);
      this.decrementCount(event.previousContainer);
      // console.log({event});
    }
  }

  decrementCount(previousContainer) {
    previousContainer.data[0].count--;
    console.log(previousContainer.data);
  }

}
