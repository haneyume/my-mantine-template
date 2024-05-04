import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Stack, TextInput, PasswordInput, Title, Button } from '@mantine/core';

import {
  useAppSelector,
  selectInitialized,
  selectCurrentUserId,
} from '@/app-redux';

import { auth_checkAuthed, auth_login } from '@/datasource';

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const initialized = useAppSelector(selectInitialized);
  const currentUserId = useAppSelector(selectCurrentUserId);

  const [email, setEmail] = useState(
    import.meta.env.VITE_FAKE_USER_EMAIL || '',
  );
  const [password, setPassword] = useState(
    import.meta.env.VITE_FAKE_USER_PASSWORD || '',
  );

  useEffect(() => {
    if (!initialized) {
      auth_checkAuthed({});
    }

    if (initialized && currentUserId) {
      navigate('/');
    }
  }, [initialized, currentUserId]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Stack w={300}>
        <Title>Login</Title>

        <TextInput
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={() => {
            auth_login({ email, password });
          }}
        >
          Login
        </Button>
      </Stack>
    </div>
  );
};
