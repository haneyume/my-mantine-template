import { FC, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useAppSelector,
  selectInitialized,
  selectCurrentUserId,
} from '@/app-redux';

import { auth_checkAuthed } from '@/datasource';

export interface AuthProtectedPageProps {
  children?: ReactNode;
}

export const AuthProtectedPage: FC<AuthProtectedPageProps> = ({ children }) => {
  const navigate = useNavigate();

  const initialized = useAppSelector(selectInitialized);
  const currentUserId = useAppSelector(selectCurrentUserId);

  useEffect(() => {
    if (!initialized) {
      auth_checkAuthed();
    }

    if (initialized && !currentUserId) {
      navigate('/login');
    }
  }, [initialized, currentUserId]);

  if (!initialized) {
    return <div />;
  }

  if (!currentUserId) {
    return <div />;
  }

  return <>{children}</>;
};
