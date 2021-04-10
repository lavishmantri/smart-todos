import React from 'react';

import { TodoList } from './components/todo-list';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Todo App
      </header>
      <div className="todo-container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
