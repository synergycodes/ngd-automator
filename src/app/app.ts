import { Component } from '@angular/core';
import { initializeModel, NgDiagramComponent, NgDiagramConfig, NgDiagramNodeTemplateMap, provideNgDiagram, NgDiagramBackgroundComponent } from 'ng-diagram';
import { Sidepanel } from "./sidepanel/sidepanel";
import { AppNode } from './app.interfaces';
import { TriggerNode } from './nodes/trigger-node/trigger-node';
import { ActionNode } from './nodes/action-node/action-node';
import { DecisionNode } from './nodes/decision-node/decision-node';
import { ResultNode } from './nodes/result-node/result-node';

@Component({
  selector: 'app-root',
  providers: [provideNgDiagram()],
  imports: [NgDiagramComponent, Sidepanel, NgDiagramBackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  model = initializeModel({
    nodes: [
      {
        id: '1',
        type: 'trigger',
        position: {
          x: 100,
          y: 150,
        },
        data: {
          description: 'PTO request sent',
        },
      },
      {
        id: '2',
        type: 'decision',
        position: {
          x: 400,
          y: 150,
        },
        data: {
          label: 'Manager reviews the process',
          options: [
            { id: 'approve', label: 'Approve' },
            { id: 'reject', label: 'Reject' },
          ],
        },
      },
      {
        id: '3',
        type: 'result',
        position: {
          x: 770,
          y: 60,
        },
        data: {
          description: 'Request accepted',
        },
      },
      {
        id: '4',
        type: 'result',
        position: {
          x: 770,
          y: 240,
        },
        data: {
          description: 'Request rejected',
        },
      },
    ] satisfies AppNode[],
    edges: [
      {
        id: '1',
        source: '1',
        sourcePort: 'port-right',
        targetPort: 'port-left',
        target: '2',
        data: {},
        targetArrowhead: 'ng-diagram-arrow',
      },
      {
        id: '2',
        data: {},
        temporary: false,
        source: '2',
        sourcePort: 'approve',
        target: '3',
        targetPort: 'port-left',
        targetArrowhead: 'ng-diagram-arrow',
      },
      {
        id: '3',
        data: {},
        temporary: false,
        source: '2',
        sourcePort: 'reject',
        target: '4',
        targetPort: 'port-left',
        targetArrowhead: 'ng-diagram-arrow',
      },
    ],
  });

  config: NgDiagramConfig = {
    zoom: {
      zoomToFit: {
        onInit: true,
      },
    },
  };

  nodeTemplateMap = new NgDiagramNodeTemplateMap([
    ['trigger', TriggerNode],
    ['action', ActionNode],
    ['decision', DecisionNode],
    ['result', ResultNode],
  ]);
}
