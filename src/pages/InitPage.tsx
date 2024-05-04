import { FC, useEffect } from 'react';

import { auth_checkAuthed } from '@/datasource';

export const InitPage: FC = () => {
  useEffect(() => {
    auth_checkAuthed({});
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-3xl font-bold">Init</div>
    </div>
  );
};
