const printAllEmployees = () => {
    document.querySelector("#employee-Container").innerHTML = "";
    getAllEmployees()
    .then(allEmployees => {
      allEmployees.forEach(singleEmployee => {
          document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
        //   console.log(singleEmployee)
        })
    }
)}