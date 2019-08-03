import faker from 'faker';
import {
  times as _times,
  uniqueId as _uniqueId
} from 'lodash';
import { TodoItem } from '../components/molecules/todoItem';

let todos: TodoItem[] = [];

_times(5, (idx) => {
  todos.push({
    id: _uniqueId(),
    text: faker.lorem.sentence(),
    completed: faker.random.boolean(),
  })
});

export default todos;
