const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('getRole() should return "Engineer"', () => {
    const testValue = "Engineer";
    const test = new Engineer("Joe", 1, "test@test.com", "bergannation");
    expect(test.getRole()).toEqual(testValue);
  });
});
