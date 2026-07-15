import { defineConfig } from '@playwright/test';



export default defineConfig({

  workers: 4, // runs up to 4 test files in parallel

});