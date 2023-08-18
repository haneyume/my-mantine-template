import { setupWorker } from 'msw';
import { handlers } from './handlers/handlers';

import { dbHandlers } from './handlers/dbHandlers';
import { socialMediaDbHandlers } from './handlers/socialMediaDbHandlers';

export const worker = setupWorker(
  ...handlers,
  ...dbHandlers,
  ...socialMediaDbHandlers,
);
