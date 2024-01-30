import { ReactNode } from 'react';

import '@/index.css';

export default ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      {children}
    </div>
  );
};
