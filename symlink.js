const symlinkDir = require('symlink-dir');
const path = require('path');

const from = path.resolve('.medusa/server/public');
const to = path.resolve('public');

symlinkDir(from, to)
  .then(() => console.log('✅ Symlink created'))
  .catch((err) => console.error('❌ Failed to create symlink:', err));
