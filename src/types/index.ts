export interface ITask {
  title: string;
  priority: string;
  description: string;
}

export interface IColumn {
  title: string;
}

export interface IElementToCreate {
  type: string;
  className: string[];
  appendTo?: Element;
  content?: string;
  style?: object;
  attr?: object;
  id?: number;
  onclick?: (element: MouseEvent) => void;
}
