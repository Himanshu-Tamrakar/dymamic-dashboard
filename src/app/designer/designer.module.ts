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

@NgModule({
  declarations: [DesignerComponent, LayoutComponent, LeftSidebarComponent, HomeComponent],
  imports: [
    CommonModule, DesignerRoutingModule, RouterModule, MaterialModule, DragDropModule, FlexLayoutModule
  ]
})
export class DesignerModule { }
