// global
var empList = [];
var totalSalaries = 0;

// function to add employee
var addEmp = function(){
  // set input data to variables
  var idNum = document.getElementById('idNumIn').value;
  var firstName = document.getElementById('firstNameIn').value;
  var lastName = document.getElementById('lastNameIn').value;
  var jobTitle = document.getElementById('jobTitleIn').value;
  var salary = document.getElementById('salaryIn').value;
  // clear form after submission
  document.getElementById('employeeform').reset();
  // add new employee
  var newEmp = {
    idNum: Number(idNum),
    firstName: firstName,
    lastName: lastName,
    jobTitle: jobTitle,
    salary: Number(salary)
  };
  // add newEmp to empList
  empList.push( newEmp );
  empToDOM();
  console.log('new employee list working: ' + empList);

  // add new employee salary to totalSalaries and append to DOM
  totalSalaries += newEmp.salary;
  document.getElementById('outputTotalSalaries').innerHTML = totalSalaries;
  console.log('total salaries: ' + totalSalaries);
};

console.log('array length: ' + empList.length);

// function to append empList to DOM
var empToDOM = function(){
  document.getElementById('outputEmpList').innerHTML = '';
  console.log('in empToDOM function');
  for(var i=0; i<empList.length; i++){
    var empLine = '<td>' + empList[i].idNum + '</td>' + '<td>' + empList[i].firstName + '</td>' + '<td>' + empList[i].lastName + '</td>' + '<td>' + empList[i].jobTitle + '</td>' + '<td>' + empList[i].salary + '</td>';
    document.getElementById('outputEmpList').innerHTML += '<tr>' + empLine + '<tr>';
  }
};

// function to delete employee by input ID number and update the salary
var deleteEmp = function(){
  console.log('in deleteEmp function');
  // get id input to delete employee
  deleteIdNum = document.getElementById('deleteIdNumIn').value;
  console.log('this employee ID was entered to get deleted: ' + deleteIdNum);
  // search through our list to find the matching id number
  for(var i=0; i<empList.length; i++){
    if(empList[i].idNum == deleteIdNum){
      console.log('accessing employee id correctly: ' + empList[i].idNum);
      // subtract deleted employee's salary from the total
      totalSalaries = totalSalaries - empList[i].salary;
      // update new salary total
      document.getElementById('outputTotalSalaries').innerHTML = totalSalaries;
      // update DOM list of employees
      empList.splice(i,1);
      empToDOM();
    }
  }
};
