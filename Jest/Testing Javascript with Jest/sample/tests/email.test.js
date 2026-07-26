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