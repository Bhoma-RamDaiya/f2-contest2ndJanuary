function PrintDeveloper() {
    //Write your code here , just console.log
     const developers = arr.filter(employee => employee.profession === 'developer');
  console.log('Developers:', developers);
}

function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log('Array after adding new employee:', arr);
}

function removeAdmin() {
    //Write your code here, just console.log
     arr = arr.filter(employee => employee.profession !== 'admin');
  console.log('Array after removing admin:', arr);
}

function concatenateArray() {
    //Write your code here, just console.log
     const additionalEmployees = [
    { id: 5, name: 'peter', age: 22, profession: 'developer' },
    { id: 6, name: 'emma', age: 21, profession: 'intern' },
  ];

  arr = arr.concat(additionalEmployees);
  console.log('Array after concatenating:', arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}