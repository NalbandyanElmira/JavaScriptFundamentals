function getAverageAge(users) {
    const totalAge = users.reduce((acc, user) => acc + user.age, 0);
    return totalAge / users.length;
}
