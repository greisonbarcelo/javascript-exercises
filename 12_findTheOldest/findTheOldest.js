
const findTheOldest = function(people) {
    //let newArrayName = people.map((people) => people.name);
    let newArrayAge = people.map((people) => people.yearOfDeath - people.yearOfBirth);
    let oldestAge = Math.max(...newArrayAge);
    

    let oldestIndex = newArrayAge.indexOf(Math.max(...newArrayAge));
    //console.log(people[oldestIndex].name);
    return people[oldestIndex].name;
    //console.log(people[oldestIndex].name);
    //console.log(newArrayName);
    // console.log(newArrayAge);
    // console.log(oldestAge);
    //let oldestAgeName = newArrayName[newArrayAge.indexOf(Math.max(...newArrayAge))];
    //console.log(oldestAgeName)


};
//findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
