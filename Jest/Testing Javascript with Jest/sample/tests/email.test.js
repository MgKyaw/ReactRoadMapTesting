const { isValidEmail } = require("/root/sample/email.js");

describe("isValidEmail", () => {
  test("returns true for a valid email", () => {
    const email = "user123@example.com";
    const result = isValidEmail(email);
    expect(result).toBe(true);
  });

  test("returns false for an invalid domain", () => {
    const email = "user123@example.net";
    const result = isValidEmail(email);
    expect(result).toBe(false);
  });
});

// Test command

// npm test -- tests/email.test.js

// Test result

// > sample@1.0.0 test
// > jest tests/email.test.js

// PASS  tests/email.test.js
// isValidEmail
//     ✓ returns true for a valid email (2 ms)
//     ✓ returns false for an invalid domain (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.451 s
// Ran all test suites matching /tests\/email.test.js/i.

// Run all tests

// npm test

// > sample@1.0.0 test
// > jest

// PASS  tests/email.test.js
// PASS  tests/token.test.js

// Test Suites: 2 passed, 2 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.225 s, estimated 1 s
// Ran all test suites.