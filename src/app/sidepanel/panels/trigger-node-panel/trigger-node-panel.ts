import { Component, inject, input } from '@angular/core';
import { NgDiagramModelService } from 'ng-diagram';
import { TriggerNodeModel } from '../../../app.interfaces';

@Component({
  selector: 'app-trigger-node-panel',
  templateUrl: './trigger-node-panel.html',
  styleUrl: './trigger-node-panel.css',
})
export class TriggerNodePanel {
  private readonly modelService = inject(NgDiagramModelService);

  node = input.required<TriggerNodeModel>();

  updateDescription(description: string) {
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, description });
  }
}
