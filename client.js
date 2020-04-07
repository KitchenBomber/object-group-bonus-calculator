const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
let annualBonuses = [];
function calculateBonuses(employeeList) {
  // let annualBonuses = [];


  for (const employee of employeeList) {


    let bonusPercentage = 0;
    if (employee.reviewRating <= 2) {
      bonusPercentage += 0;
    }
    if (employee.reviewRating === 3) {
      bonusPercentage += .04;
    }
    if (employee.reviewRating === 4) {
      bonusPercentage += .06;
    }
    if (employee.reviewRating === 5) {
      bonusPercentage += .1;
    }
    if (employee.employeeNumber.length === 4) {
      bonusPercentage += 0.05;
    }
    if (Number(employee.annualSalary) > 65000) {
      bonusPercentage -= 0.01;
    }
    if (bonusPercentage > 0.13) {
      bonusPercentage = 0.13;
    }
    if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }

    let employeeBonus = {
      name: employee.name,
      bonusPercentage: bonusPercentage,
      currentSalary: employee.annualSalary,
      totalCompensation: (Number(employee.annualSalary) * bonusPercentage + Number(employee.annualSalary)),
      totalBonus: parseInt(Number(employee.annualSalary) * bonusPercentage),
    }
    annualBonuses.push(employeeBonus);
  }


  return annualBonuses;
};


console.log(calculateBonuses(employees));


