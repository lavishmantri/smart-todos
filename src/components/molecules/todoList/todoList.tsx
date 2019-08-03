import React from "react";
import { TodoItemComponent, TodoItem } from '../todoItem';

interface TodoListProps {
  todos: TodoItem[];
}

/**
 * This is the todo list component for rendering todos
 *
 * @export
 * @param {TodoListProps} props
 * @returns
 */
export function TodoListComponent(props: TodoListProps) {
  return (
      <div>
        {props.todos.map(todo => <TodoItemComponent todo={todo} />)}
      </div>
    );
}
