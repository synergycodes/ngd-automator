import { Component, computed, inject } from '@angular/core';
import { NgDiagramSelectionService } from 'ng-diagram';

import { AppNode } from '../app.interfaces';
import { TriggerNodePanel } from './panels/trigger-node-panel/trigger-node-panel';
import { ActionNodePanel } from './panels/action-node-panel/action-node-panel';
import { DecisionNodePanel } from './panels/decision-node-panel/decision-node-panel';
import { ResultNodePanel } from './panels/result-node-panel/result-node-panel';

@Component({
  selector: 'app-sidepanel',
  imports: [TriggerNodePanel, ActionNodePanel, DecisionNodePanel, ResultNodePanel],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.css',
})
export class Sidepanel {
  private readonly selectionService = inject(NgDiagramSelectionService);

  selectedNode = computed<AppNode | undefined>(
    () => this.selectionService.selection().nodes[0] as AppNode,
  );
}
