test("returns false for an invalid domain", () => {
  const email = "user123@example.net";
  const result = isValidEmail(email);
  expect(result).toBe(false);
});