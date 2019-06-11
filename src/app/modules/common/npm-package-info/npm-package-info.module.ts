import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatSnackBarModule, MatTreeModule, MatIconModule, MatButtonModule, MatExpansionModule, MatListModule,
} from '@angular/material';
import { NpmPackageInfoComponent } from './npm-package-info.component';
import { NpmPackageListComponent } from './npm-package-list.component';
@NgModule({
    declarations: [
        NpmPackageInfoComponent,
        NpmPackageListComponent
    ],
    exports: [
        CommonModule,
        NpmPackageInfoComponent,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule
    ],
    imports: [
        CommonModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule
    ],
})
export class NpmPackageInfoModule { }
