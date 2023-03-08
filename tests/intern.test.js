const Intern = require('../lib/Intern');

test("add intern's school", () => {
    const school = "UCONN";
    const intern = new Intern("Ana", 22, "ana.fede@uconn.edu", school);
    expect(intern.school).toBe(school);
});

test("gets intern's school with getSchool()", () => {
    const school = "UCONN";
    const intern = new Intern("Ana", 22, "ana.fede@uconn.edu", school);
    expect(intern.getSchool()).toBe(school);
});

test("get intern's role with getRole()", () => {
    const role = "Intern";
    const intern = new Intern("Ana", 22, "ana.fede@uconn.edu", "UCONN");
    expect(intern.getRole()).toBe(role);
});