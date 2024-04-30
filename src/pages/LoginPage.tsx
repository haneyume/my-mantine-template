import { FC, useEffect, useState } from 'react';

import { useAppDispatch, setCurrentUserId } from '@/app-redux';

import { login } from '@/datasource';

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('test@mail.com');
  const [password, setPassword] = useState('123456');

  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-3xl font-bold">Login</div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          login(email, password).then((authed) => {
            if (authed) {
              dispatch(setCurrentUserId(authed));
            }
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
