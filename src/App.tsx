import React from 'react';
import './App.scss';
import { TodoListComponent } from './components/molecules/todoList';
import todos from './sample/todos';

function App() {
  return (
    <div className="app">
      <TodoListComponent todos={todos} />
    </div>
  );
}

export default App;
