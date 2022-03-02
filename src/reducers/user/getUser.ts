import { IUserProps } from '@src/types/user';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;

export interface LogInRequest {
  type: typeof LOG_IN_REQUEST;
  data: IUserProps;
}

export interface LogInSuccess {
  type: typeof LOG_IN_SUCCESS;
  data: IUserProps;
}

export interface LogInFailure {
  type: typeof LOG_IN_FAILURE;
}

export const logInRequest = (data: IUserProps): LogInRequest => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logInSuccess = (data: IUserProps): LogInSuccess => ({
  type: LOG_IN_SUCCESS,
  data,
});

export const logInFailure = () => ({
  type: LOG_IN_FAILURE,
});

export type GetUser =
  | ReturnType<typeof logInRequest>
  | ReturnType<typeof logInSuccess>
  | ReturnType<typeof logInFailure>;
