import { Component, OnInit } from '@angular/core';
import { Item } from '../../interface/item';
// import { DropZoneService } from '../../service/drop-zone.service'

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  paletteItems: Item[] = [
    { label: 'palette 1', count: 5 },
    { label: 'palette 2', count: 5 },
    { label: 'palette 3', count: 5 },
    { label: 'palette 4', count: 5 }
  ];

  constructor() { }

  ngOnInit() {
  }


  drop(event) {
    // this.dropZones.moveInList(event);
  }


  sideOption = [{
    id: '',
    name: 'Apple',
    fxFlex: "40%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM001',
      type: 'LINE-CHART',
      name: 'lineChart'
    }
  }, {
    id: '',
    name: 'Green Apple',
    fxFlex: "25%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  }, {
    id: '',
    name: 'Banana',
    fxFlex: "25%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  },{
    id: '',
    name: 'Mango',
    fxFlex: "25%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  },{
    id: '',
    name: 'Papaya',
    fxFlex: "25%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  },{
    id: '',
    name: 'Graps',
    fxFlex: "25%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  },{
    id: '',
    name: 'Pineapple',
    fxFlex: "25%",
    colStyle: {'padding': '20px 10px',  'border': '1px solid #ccc', 'color': 'rgba(0, 0, 0, 0.87)', 'align-items': 'center', 'cursor': 'move', 'background': 'white', 'font-size': '14px'},
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  }]
}
