import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';

import { MaterialModule } from "../material/material.module";

import { FlexLayoutModule } from '@angular/flex-layout';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './component/home/home.component';
import { DrawerComponent } from './component/drawer/drawer.component';
import { CanvasComponent } from './component/canvas/canvas.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SharedDataCompService } from './service/shared-data-comp.service';


@NgModule({
  declarations: [DesignerComponent, HomeComponent, DrawerComponent, CanvasComponent, MainContentComponent],
  imports: [
    CommonModule, DesignerRoutingModule, RouterModule, MaterialModule, DragDropModule, FlexLayoutModule
  ], providers: [SharedDataCompService]
})
export class DesignerModule { }
