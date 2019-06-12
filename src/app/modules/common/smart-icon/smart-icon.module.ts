import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatSnackBarModule, MatTreeModule, MatIconModule, MatButtonModule,
} from '@angular/material';
import { SmartIconComponent } from './smart-icon.component';
@NgModule({
    declarations: [
        SmartIconComponent,
    ],
    exports: [
        CommonModule,
        SmartIconComponent,
        MatIconModule
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
})
export class SmartIconModule { }
