import { Component, OnInit } from '@angular/core';
import { CdkDropList, CdkDragDrop, copyArrayItem, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
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

   todo = [
      'Google',
      'Facebook',
      'ISRO',
      'Apple',
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
      console.log(event)
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        console.log(event.previousContainer, event.container)

        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
      console.log(this.todo, this.done, this.prodDone)
    }

}
