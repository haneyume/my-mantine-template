import { FC, useEffect } from 'react';

import { useAppDispatch, setInitialized, setCurrentUserId } from '@/app-redux';

import { isAuthed } from '@/datasource';

export const InitPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    isAuthed().then((authed) => {
      if (authed) {
        dispatch(setCurrentUserId(authed));
      }

      dispatch(setInitialized(true));
    });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-3xl font-bold">Init</div>
    </div>
  );
};
