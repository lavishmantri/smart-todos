import React, { useState } from 'react';

import { TodoInput } from '../todo';

import { uuid } from '../../utils/uuid';

const todos: any[] = [{}];

export const TodoList = () => {
    const [todoList, setTodoList] = useState(todos);
    
    const addNextTodo = () => {
        setTodoList([...todoList, {}])
    };

    const renderTodos = () => {
        return todoList.map(renderTodoInput);
    };

    const renderTodoInput = (todo: any, idx: number) => <TodoInput key={uuid()} todo={todo} addNextTodo={addNextTodo} />;
    
    return <div className="todolist">
        {renderTodos()}
    </div>
};
