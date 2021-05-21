const Engineer = require("../lib/Engineer");

it('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const test = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(test.getRole()).toEqual(testValue);
});
