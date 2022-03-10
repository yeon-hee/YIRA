import { combineReducers } from 'redux';
import user from './user';
import task from './task';

const rootReducer = combineReducers({
  user,
  task,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
