import { store, setInitialized, setCurrentUserId } from '@/app-redux';

import { login, logout, isAuthed } from './datasource_idb';

import {
  AuthLoginFn,
  AuthLogoutFn,
  AuthCheckAuthedFn,
} from './auth_handle_types';

const auth_login: AuthLoginFn = async (email: string, password: string) => {
  const userId = await login(email, password);

  if (userId) {
    store.dispatch(setCurrentUserId(userId));
    return true;
  } else {
    store.dispatch(setCurrentUserId(undefined));
    return false;
  }
};

const auth_logout: AuthLogoutFn = async () => {
  await logout();

  store.dispatch(setCurrentUserId(undefined));
};

const auth_checkAuthed: AuthCheckAuthedFn = async () => {
  const userId = await isAuthed();

  if (userId) {
    store.dispatch(setCurrentUserId(userId));
  } else {
    store.dispatch(setCurrentUserId(undefined));
  }

  store.dispatch(setInitialized(true));
};

export { auth_login, auth_logout, auth_checkAuthed };
