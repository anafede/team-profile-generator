const fs = require ('fs');
const inquirer = require ('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML =

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

    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
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
    .then((answers) =>{
        if (answers.employeeType === 'Engineer'){
            engineerQuestions();
        }
        else if (answers.employeeType === 'Intern'){
            internQuestions();
        }
        // else {

        // }
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
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
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
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern)
        return selectEmployee();
    })
} 

// function (){
//     const  = (teamArray);

//     fs.writeFile('index.html', team, (error)=>{
//         if (error){
//             console.log(error)
//         }
//     })
// } 


managerQuestions();