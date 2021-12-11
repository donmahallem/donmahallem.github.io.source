/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
interface IFoodNode {
    children?: IFoodNode[];
    name: string;
}
// tslint:disable:object-literal-sort-keys
const TREE_DATA: IFoodNode[] = [
    {
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
        name: 'Fruit',
    },
    {
        children: [
            {
                children: [{ name: 'Broccoli' }, { name: 'Brussel sprouts' }],
                name: 'Green',
            },
            {
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
                name: 'Orange',
            },
        ],
        name: 'Vegetables',
    },
];
interface IExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}
interface ITransFormed {
    expandable: boolean;
    level: number;
    name: string;
}
const TRANSFORMER: (node: IFoodNode, level: number) => ITransFormed = (node: IFoodNode, level: number): ITransFormed => {
    return {
        expandable: !!node.children && node.children.length > 0,
        level,
        name: node.name,
    };
};
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-object-tree',
    styleUrls: ['./object-tree.component.scss'],
    templateUrl: './object-tree.component.html',
})
// tslint:disable
export class ObjectTreeComponent {
    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    public treeControl = new FlatTreeControl<IExampleFlatNode>(
        (node) => node.level,
        (node) => node.expandable
    );

    public treeFlattener = new MatTreeFlattener(
        TRANSFORMER,
        (node) => node.level,
        (node) => node.expandable,
        (node) => node.children
    );

    public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    hasChild = (_: number, node: IExampleFlatNode) => node.expandable;
}
