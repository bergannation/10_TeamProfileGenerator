const Employee = require("../lib/Employee");

describe("Employee", () => {
  it('getRole() should return "Employee"', () => {
    const testValue = "Employee";
    const test = new Employee("Joe", 1, "test@test.com");
    expect(test.getRole()).toEqual(testValue);
  });
});
