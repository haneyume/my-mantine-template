import { setupWorker } from 'msw';
import { handlers } from './handlers/handlers';

import { handlers as postHandlers } from './handlers/post';

export const worker = setupWorker(...handlers, ...postHandlers);
