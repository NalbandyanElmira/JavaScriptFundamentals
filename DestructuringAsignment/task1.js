let user = {
    name: "John",
    years: 30
};

const { name, years, isAdmin = false} = user;

console.log(name, ' ', years, ' ', isAdmin);
