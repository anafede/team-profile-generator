const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');


function generateHTML(answers) { 
const addManager = manager => {
    return  `<div class="card" style="width: 18rem;">
    <div class="name">${manager.getName()} </div>
    <ul class="list-group list-group-flush">
      <li class="role">${manager.getRole()}</li>
      <li class="idNumber">${manager.getId()}</li>
      <li class="officeNumber">${manager.getOfficeNumber()}</li>
    </ul>
    <div class="card-body">
    <a href="#" class="email">${manager.getEmail()}</a>
  </div>
  </div>`
}
const addEngineer = engineer =>{
    return  `<div class="card" style="width: 18rem;">
    <div class="name">${engineer.getName()} </div>
    <ul class="list-group list-group-flush">
      <li class="role">${engineer.getRole()}</li>
      <li class="idNumber">${engineer.getId()}</li>
    </ul>
    <div class="card-body">
    <a href="#" class="email">${manager.getEmail()}</a>
    <a href = "#" class = "github">${engineer.getGithub()} </a>
  </div>
  </div>`
}
const addIntern = intern => {
    return  `<div class="card" style="width: 18rem;">
    <div class="name">${intern.getName()} </div>
    <ul class="list-group list-group-flush">
      <li class="role">${intern.getRole()}</li>
      <li class="idNumber">${intern.getId()}</li>
      <li class ="school"> ${intern.getSchool()}</li>
    </ul>
    <div class="card-body">
    <a href="#" class="email">${intern.getEmail()}</a>
  </div>
  </div>`
}


const teamProfile = []
teamProfile.push(data.filter(employee => employee.getRole()==='manager').map(manager  => addManager(manager)));
teamProfile.push(data.filter(employee => employee.getRole()==='engineer').map(engineer => addEngineer(engineer)));
teamProfile.push(data.filter(employee => employee.getRole()==='intern').map(intern => addIntern(intern)));

module.exports = generateHTML();
}
