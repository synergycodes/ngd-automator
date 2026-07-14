import type { SimpleNode } from 'ng-diagram';

export interface TriggerNodeData {
  description?: string;
}

export interface ActionNodeData {
  label: string;
  description?: string;
}

export interface DecisionOption {
  label: string;
  id: string;
}

export interface DecisionNodeData {
  label: string;
  description?: string;
  options: DecisionOption[];
}

export interface ResultNodeData {
  description?: string;
}

/**
 * Node-level discriminated union. Each node's `type` literal is pinned to its
 * data shape, so narrowing on `node.type` narrows `node.data` for free — the
 * library's `SimpleNode` leaves `type` as a plain `string`, so we correlate the
 * two ourselves here.
 */
export type TriggerNodeModel = SimpleNode<TriggerNodeData> & { type: 'trigger' };
export type ActionNodeModel = SimpleNode<ActionNodeData> & { type: 'action' };
export type DecisionNodeModel = SimpleNode<DecisionNodeData> & { type: 'decision' };
export type ResultNodeModel = SimpleNode<ResultNodeData> & { type: 'result' };

export type AppNode =
  | TriggerNodeModel
  | ActionNodeModel
  | DecisionNodeModel
  | ResultNodeModel;

export type AppNodeType = AppNode['type'];
