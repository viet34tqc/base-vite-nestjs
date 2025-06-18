module.exports = {
  'client/**/*.{js,jsx,ts,tsx}': [
    'pnpm --filter client lint',
    'pnpm --filter client format',
  ],
  'server/**/*.{js,ts}': [
    'pnpm --filter server lint',
    'pnpm --filter server format',
  ],
};
