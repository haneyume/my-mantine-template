import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase_type';

import { store, setInitialized, setCurrentUserId } from '@/app-redux';

const supabaseClient = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string,
);

supabaseClient.auth.onAuthStateChange(async (event, session) => {
  console.log('onAuthStateChange', event, session);

  if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
    store.dispatch(setCurrentUserId(session?.user.id || ''));
  } else if (event === 'SIGNED_OUT') {
    store.dispatch(setCurrentUserId(undefined));
  }

  store.dispatch(setInitialized(true));
});

export { supabaseClient };

console.log('🐳', 'using provider - supabase');
