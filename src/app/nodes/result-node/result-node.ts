import { Component, input } from '@angular/core';
import {
  type NgDiagramNodeTemplate,
  type SimpleNode,
  NgDiagramBaseNodeTemplateComponent,
} from 'ng-diagram';
import { ResultNodeData } from '../../app.interfaces';

@Component({
  selector: 'app-result-node',
  templateUrl: './result-node.html',
  styleUrl: './result-node.css',
  imports: [NgDiagramBaseNodeTemplateComponent],
})
export class ResultNode implements NgDiagramNodeTemplate<ResultNodeData> {
  node = input.required<SimpleNode<ResultNodeData>>();
}
