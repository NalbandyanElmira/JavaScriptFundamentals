let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalaries(salaries) {
    let salary = 0;
    let name = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (salary < value) {
            salary = value;
            name = key;
        }
    }
    return name;
}

console.log(topSalaries(salaries));
