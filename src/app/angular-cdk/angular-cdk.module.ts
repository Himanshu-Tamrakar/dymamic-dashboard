import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragRopComponent } from './drag-rop/drag-rop.component';
import { FlexUiComponent } from './flex-ui/flex-ui.component'
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {DragDropModule} from '@angular/cdk/drag-drop';

const assesmentRoute: Routes = [
  {
    path: "",
    // component: DragRopComponent,
    children: [
      {
        path: "flex",
        component: FlexUiComponent,
      },
      {
        path: "drag",
        component: DragRopComponent,
      },

      { path: '', redirectTo: 'flex', pathMatch: 'full' }
    ]
  }


];

@NgModule({
  declarations: [DragRopComponent, FlexUiComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DragDropModule,
    RouterModule.forChild(assesmentRoute),
  ]
})
export class AngularCdkModule { }
