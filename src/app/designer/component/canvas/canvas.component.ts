import { Component, OnInit } from '@angular/core';
import { CdkDropList, CdkDragDrop, copyArrayItem, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
// import { DropZoneService } from '../../service/drop-zone.service'
import { Item } from '../../interface/item';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  canvasItems: Item[] = [];

  constructor() { }

  ngOnInit() {
  }
  one = 1;

  configJson = {
    id: 'LAYOUT001',
    title: 'Queues',
    structure: '8',
    rows: [{
      id: 'ROW001',
      fxLayout:"row",
      fxLayoutGap:"0%",
      cdkDropListOrientation:"horizontal",
      rowStyle: [{height: '40%'}],
      columns: [{
        id: 'COL001',
        name: 'ROW001 - Col1',
        fxFlex:"10%",
        colStyle: [{height: '40%'}],
        component: {
          id: 'COM001',
          type: 'LINE-CHART',
          name: 'lineChart'
        }
      }, {
        id: 'COL002',
        name: 'ROW001 - Col2',
        fxFlex:"25%",
        colStyle: [{height: '40%'}],
        component: {
          id: 'COM002',
          type: 'DATATABLE',
          name: 'datatable'
        }
      }]
    },{
      id: 'ROW002',
      fxLayout:"row",
      fxLayoutGap:"0%",
      cdkDropListOrientation:"horizontal",
      rowStyle: [{height: '40%'}],
      columns: [{
        id: 'COL001',
        name: 'ROW002 - Col1',
        fxFlex:"25%",
        colStyle: [{height: '40%'}],
        component: {
          id: 'COM001',
          type: 'LINE-CHART',
          name: 'lineChart'
        }
      }, {
        id: 'COL002',
        name: 'ROW002 - Col2',
        fxFlex:"25%",
        colStyle: [{height: '40%'}],
        component: {
          id: 'COM002',
          type: 'DATATABLE',
          name: 'datatable'
        }
      }]
    }]
  }
  //
  // todo = [
  //   'Google',
  //   'Facebook',
  //   'ISRO',
  //   'Apple',
  // ];
  //
  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   // 'Walk dog'
  // ];
  //
  // prodDone = [
  //   'prod-Get up',
  //   'prod-Brush teeth',
  //   'prod-Take a shower',
  //   'prod-Check e-mail',
  //   // 'prod-Walk dog'
  // ];



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    console.log(this.configJson)
  }

  itemSelected(rowId:number, colId:number) {
    alert(rowId + "" + colId)
  }

}
