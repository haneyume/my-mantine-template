import { store, setInitialized, setCurrentUserId } from '@/app-redux';

import type {} from '../../basic_types';
import { LoginFn, LogoutFn, CheckAuthedFn } from '../../function_types';

import { getDB } from './_idb';

///////////////////////////////////////////////////////////////

const auth_login: LoginFn = async ({ email, password }) => {
  try {
    const db = await getDB();

    // check email and password
    if (
      email !== import.meta.env.VITE_FAKE_USER_EMAIL ||
      password !== import.meta.env.VITE_FAKE_USER_PASSWORD
    ) {
      throw new Error('Invalid email or password');
    }

    // check if user exists
    const users = await db.getAll('users');
    users.filter((user) => user.email === email);
    if (users.length === 0 || users.length > 1) {
      throw new Error('User not found');
    }

    // get user id
    const userId = users[0].id;

    // save login session
    await db.put('auth', userId, userId);

    store.dispatch(setCurrentUserId(userId));

    return true;
  } catch (e) {
    store.dispatch(setCurrentUserId(undefined));

    return false;
  }
};

const auth_logout: LogoutFn = async ({}) => {
  const db = await getDB();

  // clear login session
  await db.clear('auth');

  store.dispatch(setCurrentUserId(undefined));
};

const auth_checkAuthed: CheckAuthedFn = async ({}) => {
  try {
    const db = await getDB();

    // check if login session exists
    const data = await db.getAll('auth');
    if (data.length === 0) {
      throw new Error('Not authed');
    }

    store.dispatch(setCurrentUserId(data[0]));
  } catch (e) {
    store.dispatch(setCurrentUserId(undefined));
  }

  store.dispatch(setInitialized(true));
};

///////////////////////////////////////////////////////////////

export { auth_login, auth_logout, auth_checkAuthed };
