const Employee = require("../lib/Employee");

it('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const test = new Employee("Alice", 1, "test@test.com");
  expect(test.getRole()).toEqual(testValue);
});
