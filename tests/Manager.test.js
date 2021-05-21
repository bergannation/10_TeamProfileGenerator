const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  it('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const test = new Manager("Travis", 1, "test@test.com", 100);
    expect(test.getRole()).toEqual(testValue);
  });

  //   it("Can set office number via constructor argument", () => {
  //     const testValue = 100;
  //     const test = new Manager("Foo", 1, "test@test.com", testValue);
  //     expect(test.officeNumber).toEqual(testValue);
  //   });
  //   it("Can get office number via getOffice()", () => {
  //     const testValue = 100;
  //     const test = new Manager("Foo", 1, "test@test.com", testValue);
  //     expect(test.getOfficeNumber()).toEqual(testValue);
  //   });
});
