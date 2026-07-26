const { isTokenExpired } = require("/root/sample/token.js");

describe("isTokenExpired", () => {
  test("should return false if the token is not expired", () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOi...";
    const result = isTokenExpired(token);
    expect(result).toBe(false);
  });

  test("should return true if the token is expired", () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOi...";
    const result = isTokenExpired(token);
    expect(result).toBe(true);
  });
});

//// Test command

// npm test -- tests/token.test.js

// Test result

// > sample@1.0.0 test
//  > jest tests/token.test.js

//  PASS  tests/token.test.js
//  isTokenExpired
//      ✓ should return false if the token is not expired (2 ms)
//      ✓ should return true if the token is expired (1 ms)

//  Test Suites: 1 passed, 1 total
//  Tests:       2 passed, 2 total
//  Snapshots:   0 total
//  Time:        0.315 s, estimated 1 s
//  Ran all test suites matching /tests\/token.test.js/i.