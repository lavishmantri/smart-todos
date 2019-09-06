import React from 'react';
import { Checkbox } from '../../atoms/checkbox';
import { Label } from '../../atoms/label';

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: TodoItem;
}

export function TodoItemComponent(props: TodoItemProps) {
  return (
    <div>
      <Checkbox checked={props.todo.completed} />
      <Label text={props.todo.text} />
    </div>
  );
}
