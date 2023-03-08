const Manager = require('../lib/Manager');

test('adds office number to manager object', () => {
    const officeNumber = 11;
    const manager = new Manager("Ana", 33, "ana.fede@uconn.edu", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('gets officeNumber with getOfficeNumber()', () => {
    const officeNumber = 11;
    const manager = new Manager("Ana", 33, "ana.fede@uconn.edu", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('gets role with getRole()', () => {
    const role = "Manager";
    const manager = new Manager("Ana", 22, "ana.fede@uconn.edu", 11);
    expect(manager.getRole()).toBe(role);
});