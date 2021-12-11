/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { ObjectTreeComponent } from './object-tree.component';
@NgModule({
    declarations: [ObjectTreeComponent],
    exports: [CommonModule, ObjectTreeComponent, MatTreeModule, MatIconModule, MatButtonModule],
    imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
})
export class ObjectTreeModule {}
