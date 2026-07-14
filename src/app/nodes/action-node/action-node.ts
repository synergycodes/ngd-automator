import { Component, input } from '@angular/core';
import {
  type NgDiagramNodeTemplate,
  type SimpleNode,
  NgDiagramBaseNodeTemplateComponent,
} from 'ng-diagram';
import { ActionNodeData } from '../../app.interfaces';

@Component({
  selector: 'app-action-node',
  templateUrl: './action-node.html',
  styleUrl: './action-node.css',
  imports: [NgDiagramBaseNodeTemplateComponent],
})
export class ActionNode implements NgDiagramNodeTemplate<ActionNodeData> {
  node = input.required<SimpleNode<ActionNodeData>>();
}
