const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];
const employeeId = [];

// Start of node & Manager inputs

function init() {
  function managerPrompts() {
    console.log("Build Your Team!");
    inquirer
      .prompt([
        {
          type: "input",
          message: "Managers Name:",
          name: "managerName",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "Managers Id:",
          name: "managerId",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "What is the Managers Email Address?",
          name: "managerEmail",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "What is the Office Number?",
          name: "managerNumber",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerNumber
        );
        teamArray.push(manager);
        employeeId.push(answers.managerId);
        createTeam();
      });
  }

  // Start inputting rest of team

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What is the next Employee's Role?",
          choices: ["Engineer", "Intern", "No More Team Members"],
          name: "employeeType",
        },
      ])
      .then((selectedEmployee) => {
        switch (selectedEmployee.employeeType) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            getCards();
        }
      });
  }

  // Input Engineer/Intern

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Engineers Name:",
          name: "engineerName",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "Engineers Id:",
          name: "engineerId",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "What is the Engineers Email Address?",
          name: "engineerEmail",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "What is the Engineers GitHub Username?",
          name: "engineerGithub",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        employeeId.push(answers.engineerId);
        createTeam();
      });
  }

  // Intern Information
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Interns Name:",
          name: "internName",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "Interns Id:",
          name: "internId",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "What is the Interns Email Address?",
          name: "internEmail",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
        {
          type: "input",
          message: "What School did the Intern Attend?",
          name: "internSchool",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Input a response to continue.";
            }
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        employeeId.push(answers.internId);
        createTeam();
      });
  }

  function getCards() {
    let teamCards = "";

    teamArray.forEach((item) => {
      let teamCreation = item.getPerson();
      teamCards += teamCreation;
    });
    let HTML = `<!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css' rel='stylesheet'>
            <link rel="stylesheet" href="./Assets/style.css"/>
            <title>The 'A' Team</title>
        </head>
        <body>
            <div class='container-fluid bg-success text-center d-flex align-items-center justify-content-center' style='height: 100px'>
                <h1 class='text-center'>The 'A' Team</h1>
            </div>
            <div class='d-flex justify-content-center position-relative mt-5 bottom-0 start-50 translate-middle-x'>
                <img src='../images/ateam.gif' class='img-fluid' alt='A TEAM'>
            </div>
            <!-- Begin Cards -->
            <div class='d-flex justify-content-center'>
                ${teamCards}
            </div>
            <!-- End Cards -->
            
        </body>
    </html>
    `;
    fs.writeFile("./dist/generateTeam.html", HTML, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  managerPrompts();
}
init();
