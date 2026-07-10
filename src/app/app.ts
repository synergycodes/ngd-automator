import { Component } from '@angular/core';
import { initializeModel, NgDiagramComponent, NgDiagramConfig, provideNgDiagram } from 'ng-diagram';

@Component({
  selector: 'app-root',
  providers: [provideNgDiagram()],
  imports: [NgDiagramComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  model = initializeModel({
    nodes: [
      {
        id: '1',
        position: {
          x: 100,
          y: 150,
        },
        data: {
          label: 'PTO request sent',
        },
      },
      {
        id: '2',
        position: {
          x: 400,
          y: 150,
        },
        data: {
          label: 'Manager reviews the process',
        },
      },
      {
        id: '3',
        position: {
          x: 770,
          y: 60,
        },
        data: {
          label: 'Request accepted',
        },
      },
      {
        id: '4',
        position: {
          x: 770,
          y: 240,
        },
        data: {
          label: 'Request rejected',
        },
      },
    ],
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
        sourcePort: 'port-right',
        target: '3',
        targetPort: 'port-left',
        targetArrowhead: 'ng-diagram-arrow',
      },
      {
        id: '3',
        data: {},
        temporary: false,
        source: '2',
        sourcePort: 'port-right',
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
}
