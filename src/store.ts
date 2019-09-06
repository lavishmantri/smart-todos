import { createStore } from 'redux';
import { GlobalState, rootReducer } from './reducers';

// TODO: revisit this to see how it's done now, also if it's done just for dev mode or not
declare global {
    interface Window { __INIT_STATE__:any }
}

const INIT_STATE:GlobalState|any = window.__INIT_STATE__ || {};

export function configureStore() {
  return createStore(rootReducer, INIT_STATE);
};
