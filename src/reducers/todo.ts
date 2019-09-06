import todos from '../sample/todos';
import { todoActionTypes } from '../actionTypes';
import { TodoItem } from '../components/molecules/todoItem';

const initialState = todos;

export function todoState(state: TodoItem[] = initialState, action: todoActionTypes): TodoItem[] {
  return initialState;
};
