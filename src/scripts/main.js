printAllEmployees();

document.querySelector("#createNewEmployee").addEventListener("click", () => {
    const empFirstName = document.querySelector("#empFirstName").value
    const empLastName = document.querySelector("#empLastName").value
    const empEmail = document.querySelector("#empEmail").value
    const empPhone = document.querySelector("#empPhone").value
    const empBirthdate = document.querySelector("#empBirthdate").value
    const empDepartment = document.querySelector("#empDepartment").value
    const isSupervisor = document.querySelector("#empSupervisor").checked

    const employeeToAdd = {
        FirstName: empFirstName,
        LastName: empLastName,
        Email: empEmail,
        Phone: empPhone,
        Birthdate: empBirthdate,
        Department: empDepartment,
        Supervisor: isSupervisor
    };

    createEmployee(employeeToAdd).then(() => {
        printAllEmployees();
    })
})

document.querySelector("#isSuper").addEventListener("click", () => {
    if (document.querySelector("#isSuper").checked === true) {
        document.querySelector("#employee-Container").innerHTML = ""
        fetch("http://localhost:8088/employees?Supervisor=true",
        )
            .then(supervisors => supervisors.json()
                .then(parsedSupers => {
                    parsedSupers.forEach(singleEmployee => {
                        document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
                    })
                }))
    } else {
        printAllEmployees()
    }
})

document.querySelector("#departmentSearch").addEventListener("change", () => {
    if (document.querySelector("#departmentSearch").value !== "All") {
        document.querySelector("#employee-Container").innerHTML = ""
        let empDept = document.querySelector("#departmentSearch").value
        console.log(empDept)
        fetch(`http://localhost:8088/employees?Department=${empDept}`,
        )
            .then(deptEmployees => deptEmployees.json()
                .then(parsedDeptEmployees => {
                    parsedDeptEmployees.forEach(singleEmployee => {
                        document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
                    })
                }))
    } else {
        printAllEmployees()
    }
})


document.querySelector("#firstNameSearch").addEventListener("keyup", () => {
    if (document.querySelector("#firstNameSearch").value !== "") {
        document.querySelector("#employee-Container").innerHTML = ""
        let firstName = document.querySelector("#firstNameSearch").value
        fetch(`http://localhost:8088/employees?FirstName=${firstName}`,
        )
            .then(firstNameEmployees => firstNameEmployees.json()
                .then(parsedFirstNameEmployees => {
                    parsedFirstNameEmployees.forEach(singleEmployee => {
                        document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
                    })
                }))
    } else {
        printAllEmployees()
    }
})

document.querySelector("#lastNameSearch").addEventListener("keyup", () => {
    if (document.querySelector("#lastNameSearch").value !== "") {
        document.querySelector("#employee-Container").innerHTML = ""
        let firstName = document.querySelector("#lastNameSearch").value
        fetch(`http://localhost:8088/employees?lastName=${lastName}`,
        )
            .then(lastNameEmployees => lastNameEmployees.json()
                .then(parsedlastNameEmployees => {
                    parsedlastNameEmployees.forEach(singleEmployee => {
                        document.querySelector("#employee-Container").innerHTML += buildSingleEmployee(singleEmployee)
                    })
                }))
    } else {
        printAllEmployees()
    }
})

document.querySelector("#employee-Container").addEventListener("click", () => {
    let i = event.target.id.split("-")[1]
    return fetch(`http://localhost:8088/employees/${i}`, {
        method: "DELETE"
    })
    .then(printAllEmployees)
})
