import { Component, OnInit } from '@angular/core';
import { Item } from '../../interface/item';
import { DropZoneService } from '../../service/drop-zone.service'

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

  constructor(private dropZones: DropZoneService) { }

  ngOnInit() {
  }


  drop(event) {
    this.dropZones.moveInList(event);
  }

}
