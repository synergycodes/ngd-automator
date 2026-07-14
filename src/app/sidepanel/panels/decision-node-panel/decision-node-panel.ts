import { Component, inject, input } from '@angular/core';
import { NgDiagramModelService } from 'ng-diagram';
import { DecisionNodeModel } from '../../../app.interfaces';

@Component({
  selector: 'app-decision-node-panel',
  templateUrl: './decision-node-panel.html',
  styleUrl: './decision-node-panel.css',
})
export class DecisionNodePanel {
  private readonly modelService = inject(NgDiagramModelService);

  node = input.required<DecisionNodeModel>();

  updateLabel(label: string) {
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, label });
  }

  updateDescription(description: string) {
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, description });
  }

  updateOption(id: string, label: string) {
    const options = this.node().data.options.map((option) =>
      option.id === id ? { ...option, label } : option,
    );
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, options });
  }

  addOption() {
    const options = [...this.node().data.options, { id: crypto.randomUUID(), label: 'New option' }];
    this.modelService.updateNodeData(this.node().id, { ...this.node().data, options });
  }

  removeOption(id: string) {
    const nodeId = this.node().id;
    // The option's port disappears with it, so drop edges connected there
    // or they'd be left dangling.
    const staleEdgeIds = this.modelService
      .getConnectedEdges(nodeId)
      .filter((edge) => edge.source === nodeId && edge.sourcePort === id)
      .map((edge) => edge.id);
    if (staleEdgeIds.length) {
      this.modelService.deleteEdges(staleEdgeIds);
    }
    const options = this.node().data.options.filter((option) => option.id !== id);
    this.modelService.updateNodeData(nodeId, { ...this.node().data, options });
  }
}
