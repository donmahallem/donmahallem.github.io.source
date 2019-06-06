import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatSnackBarModule, MatTreeModule,
} from '@angular/material';
import { ObjectTreeItemComponent } from './object-tree-item.component';
@NgModule({
    declarations: [
        ObjectTreeItemComponent,
    ],
    exports: [
        CommonModule,
        ObjectTreeItemComponent,
        MatTreeModule
    ],
    imports: [
        MatTreeModule,
        CommonModule,
    ],
})
export class ObjectTreeModule { }