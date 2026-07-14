import { Component, input } from '@angular/core';
import {
  type NgDiagramNodeTemplate,
  type SimpleNode,
  NgDiagramBaseNodeTemplateComponent,
} from 'ng-diagram';
import { TriggerNodeData } from '../../app.interfaces';

@Component({
  selector: 'app-trigger-node',
  templateUrl: './trigger-node.html',
  styleUrl: './trigger-node.css',
  imports: [NgDiagramBaseNodeTemplateComponent],
})
export class TriggerNode implements NgDiagramNodeTemplate<TriggerNodeData> {
  node = input.required<SimpleNode<TriggerNodeData>>();
}
