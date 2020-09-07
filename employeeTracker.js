var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "8287141Gk!",

  database: "corp_db"
});

const main = [
  {
    type: "list",
    message: "Choose what you'd like to do",
    choices: ["View all employees", "View all employees by department", "View all employees by role", "Add employee", "Add role", "Add department", "Update employee role"],
    name: "main"
  }
];

const addEmployee = [
  {
    type: "input",
    message: "What is the employees first name?",
    name: "emFirst"
  },
  {
    type: "input",
    message: "What is the employees last name?",
    name: "emLast"
  },
  {
    type: "list",
    message: "What role does the employee fulfill?",
    choices: ["Junior Dev", "Developer", "Senior Developer", "Dev Ops Manager"],
    name: "emRole"
  },
  {
    type: "list",
    message: "Who is this employee's manager?",
    choices: ["Jeff Hoffman", "Max Allee", "Caleb Crum"],
    name: "emManager"
  }
];

const addRole = [
  {
    type: "input",
    message: "What is this role's title?",
    name: "rotleTitle"
  },
  {
    type: "input",
    message: "What is this role's salary?",
    name: "roleSalary"
  },
  {
    type: "list",
    message: "What department?",
    choice: ["Sales Team", "Influencer Team", "Ops Team", "LP Team", "Production Team", "Leadership"],
    name: "roleDepartment"
  }
];

const addDepartment = [
  {
    type: "input",
    message: "What is the title of this department?",
    name: "departmentTitle"
  }
];

const viewByDepartment = [
  {
    type: "list",
    message: "Which department",
    // choice: "",
    name: "deptChoice"
  }
];

const viewByRole = [
  {
    type: "list",
    messsage: "Which role?",
    // choices: "",
    name: "roleChoice"
  }
];

const updateEmployee = [
  {
    type: "list",
    messsage: "Which employee do you want to update?",
    // choices: "",
    name: "emID"
  },
  {
    type: "list",
    messsage: "Which role is this employee switching to?",
    // choices: "",
    name: "emNewRole"
  }
];

connection.connect(function (err) {
  if (err) throw (err);
  console.log("Connected as if" + connection.threadId);
  afterConnection();
});

function afterConnection() {
  inquirer.prompt(main).then(function (mainChoice) {
    console.log(mainChoice.main);
  });
}



function addEmp() {
  inquirer.prompt(addEmployee).then(function (data) {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err
    })
  })
}
function addRol() {
  inquirer.prompt(addRole).then(function (data) {
    connection.query("SELECT * FROM", (err, res) => {
      if (err) throw err
    })
  })
}
function addDep(){
inquirer.prompt(addDepartment).then(function(data){
  connection.query("SELECT * FROM role", (err,res) => {
    if (err) throw err
  })
})
}

function viewEmp(){
  console.log("You're all fired")
}