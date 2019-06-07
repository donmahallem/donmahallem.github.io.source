import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatIconModule, MatButtonModule,
} from '@angular/material';
import { PagerComponent } from './pager.component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        PagerComponent,
    ],
    exports: [
        CommonModule,
        PagerComponent,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ],
})
export class PagerModule { }
