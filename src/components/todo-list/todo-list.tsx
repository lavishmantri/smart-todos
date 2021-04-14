import React, { useState } from 'react';

import { Todo, TodoInput } from '../todo';

import { uuid } from '../../utils/uuid';

const todos: any[] = [
  {
    text: '',
    level: 0,
  },
];

export const TodoList = () => {
    const [todoList, setTodoList] = useState(todos);
    
    const addNextTodo = () => {
      setTodoList([
        ...todoList,
        {
          level: todoList[todoList.length - 1].level || 0,
        },
      ]);
    };

    const shiftTodoRight = (index: number, todo: Todo) => {
      if (index <= 0 || todoList[index - 1].level === todo.level - 1) {
        return;
      }

      const changedTodo = {
        ...todoList[index],
        level: (todoList[index].level || 0) + 1,
      };

      const newList = [...todoList.slice(0, index), changedTodo];
      const lastPart = todoList.slice(index + 1, todoList.length - 1);

      if (lastPart && lastPart.length) {
        newList.concat(todoList);
      }

      setTodoList(newList);
    };

    const handleOnChangeTodo = (text: string, idx: number) => {
      setTodoList(
        todoList.map((td, i) =>
          i === idx
            ? {
                ...td,
                text,
              }
            : td,
        ),
      );
    };

    const renderTodos = () => {
        return todoList.map(renderTodoInput);
    };

    const renderTodoInput = (todo: any, idx: number) => (
      <TodoInput
        key={uuid()}
        todo={todo}
        index={idx}
        addNextTodo={addNextTodo}
        shiftTodoRight={shiftTodoRight}
        onChangeTodo={handleOnChangeTodo}
      />
    );
    
    return <div className="todolist">
        {renderTodos()}
    </div>
};
