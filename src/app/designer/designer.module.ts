import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';

import { MaterialModule } from "../material/material.module";

import { FlexLayoutModule } from '@angular/flex-layout';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './component/home/home.component';
import { DrawerComponent } from './component/drawer/drawer.component';
import { CanvasComponent } from './component/canvas/canvas.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { DropZoneService } from './service/drop-zone.service';
import { NumberToIterablePipe } from './pipe/number-to-iterable.pipe'

@NgModule({
  declarations: [DesignerComponent, NumberToIterablePipe, LayoutComponent, LeftSidebarComponent, HomeComponent, DrawerComponent, CanvasComponent, MainContentComponent],
  imports: [
    CommonModule, DesignerRoutingModule, RouterModule, MaterialModule, DragDropModule, FlexLayoutModule
  ], providers: [DropZoneService]
})
export class DesignerModule { }
