import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatSnackBarModule, MatTreeModule, MatIconModule, MatButtonModule,
} from '@angular/material';
import { ObjectTreeComponent } from './object-tree.component';
@NgModule({
    declarations: [
        ObjectTreeComponent,
    ],
    exports: [
        CommonModule,
        ObjectTreeComponent,
        MatTreeModule,
        MatIconModule,
        MatButtonModule
    ],
    imports: [
        CommonModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule
    ],
})
export class ObjectTreeModule { }
