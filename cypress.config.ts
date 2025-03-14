import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // @TODO: Use env variable
    specPattern: 'src/tests/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'src/tests/e2e/support/e2e.ts',
    fixturesFolder: 'src/tests/e2e/fixtures',
  },
  video: false,
  retries: { runMode: 2, openMode: 0 },
});
