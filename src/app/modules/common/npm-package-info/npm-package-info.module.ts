import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatSnackBarModule, MatTreeModule, MatIconModule, MatButtonModule,
} from '@angular/material';
import { NpmPackageInfoComponent } from './npm-package-info.component';
@NgModule({
    declarations: [
        NpmPackageInfoComponent,
    ],
    exports: [
        CommonModule,
        NpmPackageInfoComponent,
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
export class NpmPackageInfoModule { }
