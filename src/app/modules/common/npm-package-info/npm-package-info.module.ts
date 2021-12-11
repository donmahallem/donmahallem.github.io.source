/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { NpmPackageInfoComponent } from './npm-package-info.component';
import { NpmPackageListComponent } from './npm-package-list.component';
@NgModule({
    declarations: [NpmPackageInfoComponent, NpmPackageListComponent],
    exports: [CommonModule, NpmPackageInfoComponent, MatTreeModule, MatIconModule, MatButtonModule, MatExpansionModule, MatListModule],
    imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule, MatExpansionModule, MatListModule],
})
export class NpmPackageInfoModule {}
