import { Component, inject, input } from '@angular/core';
import { NgDiagramModelService } from 'ng-diagram';
import { ActionNodeModel } from '../../../app.interfaces';

@Component({
  selector: 'app-action-node-panel',
  templateUrl: './action-node-panel.html',
  styleUrl: './action-node-panel.css',
})
export class ActionNodePanel {
  private readonly modelService = inject(NgDiagramModelService);

  node = input.required<ActionNodeModel>();

  updateLabel(label: string) {
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, label });
  }

  updateDescription(description: string) {
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, description });
  }
}
