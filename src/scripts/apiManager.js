const createEmployee = employeeObject => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
    })
}

const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
};

const getOneEmployee = (empId) => {
    return fetch(`http://localhost:8088/employees/${empId}`).then(employees => employees.json());
};

const editEmployee = (idParam, editedEmployeeObject) => {
    return fetch(`http://localhost:8088/employees/${idParam}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editedEmployeeObject)
    })
  }