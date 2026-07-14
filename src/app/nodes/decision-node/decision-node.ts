import { Component, input } from '@angular/core';
import {
  type NgDiagramNodeTemplate,
  type SimpleNode,
  NgDiagramNodeSelectedDirective,
  NgDiagramPortComponent,
} from 'ng-diagram';
import { DecisionNodeData } from '../../app.interfaces';

@Component({
  selector: 'app-decision-node',
  templateUrl: './decision-node.html',
  styleUrl: './decision-node.css',
  imports: [NgDiagramPortComponent],
  // Applies `ng-diagram-node-selected` on the host when the node is selected;
  // the diagram's [node] binding is forwarded to the directive.
  hostDirectives: [{ directive: NgDiagramNodeSelectedDirective, inputs: ['node'] }],
  host: {
    // Highlights ports when hovering anywhere over the node.
    '[class.ng-diagram-port-hoverable-over-node]': 'true',
  },
})
export class DecisionNode implements NgDiagramNodeTemplate<DecisionNodeData> {
  node = input.required<SimpleNode<DecisionNodeData>>();
}
