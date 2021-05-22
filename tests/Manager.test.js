const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  it('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const test = new Manager("Travis", 1, "test@test.com", 100);
    expect(test.getRole()).toEqual(testValue);
  });
});
