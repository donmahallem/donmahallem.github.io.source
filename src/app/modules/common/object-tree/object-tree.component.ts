import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}
const _transformer = (node: FoodNode, level: number) => {
    return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level,
    };
};
@Component({
    selector: 'app-object-tree',
    templateUrl: './object-tree.component.html',
    styleUrls: ['./object-tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectTreeComponent {

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    public treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level, node => node.expandable);

    public treeFlattener = new MatTreeFlattener(
        _transformer, node => node.level, node => node.expandable, node => node.children);

    public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
