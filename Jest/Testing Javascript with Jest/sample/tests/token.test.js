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