const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Jane Doe", 1, "test@test.com", "Hastings");
    expect(e.getRole()).toEqual(testValue);
  });
});
