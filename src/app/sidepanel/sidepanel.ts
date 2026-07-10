import { Component, computed, inject } from '@angular/core';
import { NgDiagramModelService, NgDiagramSelectionService } from 'ng-diagram';
import { NodeData } from '../app.interfaces';

@Component({
  selector: 'app-sidepanel',
  imports: [],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.css',
})
export class Sidepanel {
  private readonly selectionService = inject(NgDiagramSelectionService);
  private readonly modelService = inject(NgDiagramModelService);

  selectedNode = computed(() => {
    return this.selectionService.selection().nodes[0];
  });

  nodeData = computed<NodeData | undefined>(() => this.selectedNode()?.data as NodeData);

  onLabelChange(label: string) {
    const node = this.selectedNode();
    if (!node) {
      return;
    }

    this.modelService.updateNodeData(node.id, { label });
  }
}
