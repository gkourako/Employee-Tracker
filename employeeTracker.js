var mysql = require("mysql");
var inquirer = require("inquirer")
var cTable = require("console.table")

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
    choices: ["View all employees", "View all departments", "View all roles", "Add employee", "Add role", "Add department", "Update employee role", "Exit"],
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
    name: "roleTitle"
  },
  {
    type: "input",
    message: "What is this role's salary?",
    name: "roleSalary"
  },
  {
    type: "list",
    message: "What department?",
    choices: ["Sales Team", "Influencer Team", "Ops Team", "LP Team", "Production Team", "Leadership"],
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
    choices: ["Sales Team", "Influencer Team", "Ops Team", "LP Team", "Production Team", "Leadership"],
    name: "deptChoice"
  }
];

const viewByRole = [
  {
    type: "list",
    messsage: "Which role?",
    choices: ["Junior Dev", "Developer", "Senior Developer", "Dev Ops Manager"],
    name: "roleChoice"
  }
];

connection.connect(function (err) {
  if (err) throw (err);
 
  afterConnection();
});

function afterConnection() {
  inquirer.prompt(main).then(function (mainChoice) {
    
    const main = mainChoice.main
    if (main === "View all employees") {
      viewEmp()
    } else if (main === "View all departments") {
      viewDept()
    } else if (main === "View all roles") {
      viewRoles()
    } else if (main === "Add employee") {
      addEmp()
    } else if (main === "Add role") {
      addRol()
    } else if (main === "Add deparment") {
      addDep()
    } 

    else {
      connection.end()
    }
  });
}



function addEmp() {
  inquirer.prompt(addEmployee).then(function (data) {
  

    connection.query("SELECT * FROM role", (err, res) => {
      
      const filteredArray = res.filter(val => data.emRole === val.title
      )
      // console.log(filteredArray)
      connection.query("INSERT INTO employee SET ?",
        {
          first_name: data.emFirst,
          last_name: data.emLast,
          // role_id: filteredArray[0].id

        }, (err, res) => {
          if (err) throw err
          afterConnection()
        })
    })
  })
}

function addRol() {
  inquirer.prompt(addRole).then(function (data) {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err

      const filteredArray = res.filter(val => data.roleDepartment === val.title
      )
      console.log(filteredArray)
      connection.query("INSERT INTO role SET ?",
        {
          title: data.roleTitle,
          salary: data.roleSalary,
          // department_id: filteredArray[0].id

        }, (err, res) => {
          if (err) throw err
          console.table(res)
          afterConnection()
        })
    })
  })
};

function addDep() {
  inquirer.prompt({
    type: "input",
    message: "What is the title of this department?",
    name: "departmentTitle"
  }).then(function(maryP){
    connection.query("INSERT INTO department (department) VALUES (?)", [maryP.departmentTitle], function (err, res) {
      if (err) throw err;
      
      afterConnection()
    });
  });
}



// *********FINISHED 
function viewEmp() {
  connection.query("SELECT first_name, last_name FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection()
  })
}

// *********FINISHED 
function viewDept() {
  connection.query("SELECT name FROM department", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection()
  })
}

// *********FINISHED 
function viewRoles() {
  connection.query("SELECT title, salary FROM role", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection()
  })

}