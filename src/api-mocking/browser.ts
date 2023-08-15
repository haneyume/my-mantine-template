import { setupWorker } from 'msw';
import { handlers } from './handlers/handlers';

import { dbHandlers } from './handlers/dbHandlers';

export const worker = setupWorker(...handlers, ...dbHandlers);
