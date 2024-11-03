function sumSalaries(salaries) {
    let objValues = Object.values(salaries);
    let sum  = 0;
    for (let salary of objValues) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log(sumSalaries(salaries));
