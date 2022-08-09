/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 950,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
