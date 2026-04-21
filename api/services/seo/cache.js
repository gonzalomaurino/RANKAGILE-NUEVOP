import { LRUCache } from 'lru-cache';
import { config } from '../../config/env.js';

const cache = new LRUCache({
  max: config.seo.cacheMax,
  ttl: config.seo.cacheTtlMs,
  allowStale: false,
});

function keyFor(url) {
  try {
    const u = new URL(url);
    u.hash = '';
    return u.toString().toLowerCase();
  } catch {
    return String(url).toLowerCase();
  }
}

export const seoCache = {
  get(url) {
    return cache.get(keyFor(url));
  },
  set(url, value) {
    cache.set(keyFor(url), value);
    return value;
  },
  clear() {
    cache.clear();
  },
};
