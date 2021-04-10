import React from 'react';
import { Input } from '../../input';

interface Todo {
  text: string;
}

interface TodoInputProps {
  todo: Todo;
  addNextTodo: () => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ todo, addNextTodo }) => {
  const handleOnEnter = (val: string) => {
    addNextTodo();
  };
  return (
    <div className="todoitem">
      <Input value={todo.text} onEnter={handleOnEnter} />
    </div>
  );
};
