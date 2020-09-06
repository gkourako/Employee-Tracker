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
]

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
    message: "",
    choices: "",
    name: ""
  }
]
