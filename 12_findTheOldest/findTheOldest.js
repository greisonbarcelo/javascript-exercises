
const findTheOldest = function(people) {
    let newArrayAge = people.map((people) => people.yearOfDeath - people.yearOfBirth);
    let oldestAge = Math.max(...newArrayAge);
    

    let oldestIndex = newArrayAge.indexOf(Math.max(...newArrayAge));

    return people[oldestIndex];
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
