import { combineReducers } from 'redux';
import user from './user';
import task from './task';
import project from './project';

const rootReducer = combineReducers({
  user,
  task,
  project,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
