// import { store, setInitialized, setCurrentUserId } from '@/app-redux';

import { LoginFn, LogoutFn, CheckAuthedFn } from './function_types';

const auth_login: LoginFn = async ({}) => {
  throw new Error('Not implemented');
};

const auth_logout: LogoutFn = async ({}) => {
  throw new Error('Not implemented');
};

const auth_checkAuthed: CheckAuthedFn = async ({}) => {
  throw new Error('Not implemented');
};

export { auth_login, auth_logout, auth_checkAuthed };
