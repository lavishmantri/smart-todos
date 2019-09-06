import { combineReducers } from 'redux';
import { todoState } from './todo';
import { TodoItem } from '../components/molecules/todoItem';

export interface GlobalState {
  todos: TodoItem[]
}

export const rootReducer: any = combineReducers({
  todos: todoState
});
