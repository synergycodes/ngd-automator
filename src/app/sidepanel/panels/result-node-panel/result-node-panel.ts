import { Component, inject, input } from '@angular/core';
import { NgDiagramModelService } from 'ng-diagram';
import { ResultNodeModel } from '../../../app.interfaces';

@Component({
  selector: 'app-result-node-panel',
  templateUrl: './result-node-panel.html',
  styleUrl: './result-node-panel.css',
})
export class ResultNodePanel {
  private readonly modelService = inject(NgDiagramModelService);

  node = input.required<ResultNodeModel>();

  updateDescription(description: string) {
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, description });
  }
}
