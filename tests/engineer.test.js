const Engineer = require('../lib/Engineer');

test('adds gitHub username to engineer object',() =>{
    const github = "anafede";
    const engineer = new Engineer("Ana", 22, "ana.fede@uconn.edu", github);
    expect(engineer.github).toBe(github);
});

test('gets gitHub username with getGithub()', () => {
    const github = "anafede";
    const engineer = new Engineer("Ana", 22, "ana.fede@uconn.edu", "anafede");
    expect(engineer.getGithub()).toBe(github);
});

test('gets engineer role with getRole()', () => {
    const role = 'Engineer';
    const engineer = new Engineer("Ana", 22, "ana.fede@uconn.edu", "anafede")
    expect(engineer.getRole()).toBe(role);
});