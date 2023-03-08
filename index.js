const fs = require ('fs');
const inquirer = require ('inquirer');
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require ('./src/template.js');

teamArray = [];

function managerQuestions () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name",
            validate: nameInput =>{
                if (nameInput){
                    return true;
                } else {
                    console.log("Enter the team manager's name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's ID number",
            validate: idInput =>{
                if (isNaN(idInput)){
                    console.log("Please enter a valid number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email",
            validate: emailInput => {
                if (emailInput){
                    return true
                } else {
                    console.log("Enter the team manager's email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number",
            validate: officeNumberInput => {
                if (isNaN(officeNumberInput)){
                    console.log("Please enter a valid number")
                    return false;
                } else {
                    return true;
                }
            }
        },

    ]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamArray.push(manager)
        return selectEmployee();
    })

}

function selectEmployee(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select a type of employee to add to your team',
            choices: ['Engineer', 'Intern', 'I am finished building my team'],   
        }
        
    ])
    .then((data) =>{
        if (data.employeeType === 'Engineer'){
            engineerQuestions();
        }
        else if (data.employeeType === 'Intern'){
            internQuestions();
        }
       else {
           writeFile();
         }
    }
        )
}

function engineerQuestions (){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name",
            validate: nameInput =>{
                if (nameInput){
                    return true;
                } else {
                    console.log("Enter the engineer's name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's ID number",
            validate: idInput =>{
                if (isNaN(idInput)){
                    console.log("Please enter a valid number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email",
            validate: emailInput => {
                if (emailInput){
                    return true
                } else {
                    console.log("Enter the engineer's email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub username",
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log("Enter the engineer's Github username")
                    return false;
                }
            }
        },
    ]).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArray.push(engineer)
        return selectEmployee();
    })
} 

function internQuestions (){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name",
            validate: nameInput =>{
                if (nameInput){
                    return true;
                } else {
                    console.log("Enter the intern's name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID number",
            validate: idInput =>{
                if (isNaN(idInput)){
                    console.log("Please enter a valid number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email",
            validate: emailInput => {
                if (emailInput){
                    return true
                } else {
                    console.log("Enter the intern's email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter where the intern attends school",
            validate: schoolInput => {
                if (schoolInput){
                    return true;
                } else {
                    console.log("Enter the where the intern attends school")
                    return false;
                }
            }
        },
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamArray.push(intern)
        return selectEmployee();
    })
} 



const writeFile = data =>{
    fs.writeFile('./dist/team.html', data, err => {
        if (err){
            console.error(err);
        }else {
            console.log("team page created and available in dist folder")
        }
    })
}


 managerQuestions()
    .then(selectEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(team => {
        return writeFile(team);
    }) .catch(err =>{
        console.log(err);
    }); 
