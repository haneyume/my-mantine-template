interface DNDTreeItem<T> {
  id: string;
  parent: string;
  text: string;
  droppable: boolean;
  data: T;
}

interface CanSelectCurrentItem {
  currentId: string;
}

export type { DNDTreeItem, CanSelectCurrentItem };

export type { BasicItem, ApiItem } from './feature-types';
