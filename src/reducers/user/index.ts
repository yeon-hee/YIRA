import { IUserProps } from '@src/types/user';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, GetUser } from './getUser';
import produce from 'immer';

interface IUserState {
  user: IUserProps | null;
  isLoggedIn: boolean;
}

export const userState: IUserState = {
  user: null,
  isLoggedIn: false,
};

type ReducerAction = GetUser;

export const user = (state: IUserState = userState, action: ReducerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggedIn = false;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggedIn = true;
        draft.user = action.data;
        break;
      case LOG_IN_FAILURE:
        break;
    }
  });
};

export default user;
