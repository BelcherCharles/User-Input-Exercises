const buildSingleEmployee = (singleEmployeeObject) => {
  if (singleEmployeeObject.Supervisor === true) {
    return `<div class="supervisor">
      <span>Employee Name - ${singleEmployeeObject.FirstName} ${singleEmployeeObject.LastName}</span>
      <p>Email - ${singleEmployeeObject.Email}</p>
      <p>Phone # ${singleEmployeeObject.Phone}
      <p>Birthday - ${singleEmployeeObject.Birthdate}</p>
      <p>Department - ${singleEmployeeObject.Department}</p>
      <button id="removeBtn-${singleEmployeeObject.id}">Remove Employee</button>
      </div><br>
  `
} else {
  return `<div class="employee">
      <span>Employee Name - ${singleEmployeeObject.FirstName} ${singleEmployeeObject.LastName}</span>
      <p>Email - ${singleEmployeeObject.Email}</p>
      <p>Phone # ${singleEmployeeObject.Phone}
      <p>Birthday - ${singleEmployeeObject.Birthdate}</p>
      <p>Department - ${singleEmployeeObject.Department}</p>
      <button id="removeBtn-${singleEmployeeObject.id}">Remove Employee</button>
      </div><br>
  `
}}