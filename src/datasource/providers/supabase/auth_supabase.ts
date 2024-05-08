import { store, setInitialized, setCurrentUserId } from '@/app-redux';

import { LoginFn, LogoutFn, CheckAuthedFn } from '../../function_types';

import { account } from '../appwrite/_appwrite';

const auth_login: LoginFn = async ({ email, password }) => {
  try {
    const user = await account.createEmailPasswordSession(email, password);

    store.dispatch(setCurrentUserId(user.$id));

    return true;
  } catch (e) {
    store.dispatch(setCurrentUserId(undefined));

    return false;
  }
};

const auth_logout: LogoutFn = async ({}) => {
  await account.deleteSession('current');

  store.dispatch(setCurrentUserId(undefined));
};

const auth_checkAuthed: CheckAuthedFn = async ({}) => {
  try {
    const user = await account.get();

    store.dispatch(setCurrentUserId(user.$id));
  } catch (e) {
    store.dispatch(setCurrentUserId(undefined));
  }

  store.dispatch(setInitialized(true));
};

export { auth_login, auth_logout, auth_checkAuthed };
