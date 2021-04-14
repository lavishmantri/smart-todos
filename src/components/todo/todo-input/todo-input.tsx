import React from 'react';
import { Input } from '../../input';
import cx from 'classnames';
import styles from './todo-input.module.scss';

export interface Todo {
  text: string;
  level: number;
}

interface TodoInputProps {
  todo: Todo;
  index: number;
  onChangeTodo: (val: string, i: number) => void;
  addNextTodo?: () => void;
  shiftTodoRight?: (index: number, todo: Todo) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({
  todo,
  index,
  onChangeTodo,
  addNextTodo = () => {},
  shiftTodoRight = () => {},
}) => {
  const handleOnEnter = (val: string) => {
    addNextTodo();
  };

  const handleOnTab = () => {
    shiftTodoRight(index, todo);
  };

  const handleOnChangeTodo = (txt: string) => onChangeTodo(txt, index);

  return (
    <div className={cx('todoitem', styles[`left-margin-${todo.level}`])}>
      <Input
          value={todo.text}
          onEnter={handleOnEnter}
          onTab={handleOnTab}
          onChange={handleOnChangeTodo}
      />
    </div>
  );
};
