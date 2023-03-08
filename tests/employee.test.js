const Employee = require('../lib/Employee');

describe("Employee", () => {
    it('should create a new Employee object', () =>{
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });

    it('should add employee name', () => {
        const name = "Ana";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it('should add employee id', () => {
        const id = 22;
        const employee = new Employee("Ana", id);
        expect(employee.id).toBe(id);
    });

    it('should add employee email', () =>{
        const email = 'ana.fede@uconn.edu';
        const employee = new Employee("Ana", 22, email);
        expect(employee.email).toBe(email);
    });

    it('should get name through getName()', () => {
        const name = "Ana";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });

    it('should get id through getId()', () => {
        const id = 22;
        const employee = new Employee("Ana", id);
        expect(employee.getId()).toBe(id);
    });

    it('should get email through getEmail()', () => {
        const email = "ana.fede@uconn.edu";
        const employee = new Employee("Ana", 22, email);
        expect(employee.getEmail()).toBe(email);
    });
    
    it('should get role through getRole()', () =>{
        const role = "Employee";
        const employee = new Employee("Ana", 22, "ana.fede@uconn.edu");
        expect(employee.getRole()).toBe(role);
    });
})