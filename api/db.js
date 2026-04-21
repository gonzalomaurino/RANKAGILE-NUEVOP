/**
 * Database connection shim. Swap in a real driver (pg / mysql2 / mongoose) when
 * the persistence layer is chosen.
 */
let state = { connected: false };

export async function connect() {
  state.connected = true;
  console.log('[db] connection stub initialized');
  return state;
}

export function getDb() {
  if (!state.connected) throw new Error('DB not connected');
  return state;
}
