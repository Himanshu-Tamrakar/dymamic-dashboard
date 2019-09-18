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
    name: 'Himanshu',
    fxFlex: "40%",
    colStyle: [{ height: '40%' }],
    component: {
      id: 'COM001',
      type: 'LINE-CHART',
      name: 'lineChart'
    }
  }, {
    id: '',
    name: 'Harbu',
    fxFlex: "25%",
    colStyle: [{ height: '40%' }],
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  }, {
    id: '',
    name: 'Shetty',
    fxFlex: "25%",
    colStyle: [{ height: '40%' }],
    component: {
      id: 'COM002',
      type: 'DATATABLE',
      name: 'datatable'
    }
  }]
}
