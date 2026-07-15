import { defineConfig } from '@playwright/test';



export default defineConfig({

  workers: 4, // runs up to 4 test files in parallel

});

// import { test } from '@playwright/test';


// test.describe.configure({ mode: 'parallel' });