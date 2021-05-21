const Intern = require("../lib/Intern");

it('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Subj", 1, "test@test.com", "TEX");
  expect(e.getRole()).toEqual(testValue);
});
