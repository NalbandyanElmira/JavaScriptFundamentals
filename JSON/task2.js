let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) {
        return undefined;
    }
    return value;
}));