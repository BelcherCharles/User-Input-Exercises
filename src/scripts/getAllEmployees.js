const printAllEmployees = () => {
    document.querySelector("#employee-Container").innerHTML = "";
    getAllEmployees()
    .then(allEmployees => {
      allEmployees.forEach(singleEmployee => {
          document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
        //   console.log(singleEmployee)

    // fetch("http://localhost:8088/employees")
    //     .then(employees => employees.json())
    //     .then(parsedEmployees => {
    //         console.table(parsedEmployees)
    //         document.querySelector("#employeesContainer").innerHTML = parsedEmployees)
        })
    }
)}