// Salmon Waters moved to https://salmonwaters.ca. Browsers that kept the old offline worker from this address check
// this file for an update: this one deletes the old caches, removes itself and sends open tabs to the new site.
const to = (u) => { const { pathname, search, hash } = new URL(u); return `https://salmonwaters.ca${pathname.replace(/^\/salmon-waters/, '') || '/'}${search}${hash}`; };
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(to(c.url));
})()));
