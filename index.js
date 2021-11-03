// Code your solution in this file!

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (arr) => {
    let firstTwoDrivers = [];
    firstTwoDrivers = arr.slice(0,2);
    return firstTwoDrivers;
}

returnFirstTwoDrivers(drivers);
console.log(returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = (arr) => {
    let lastTwoDrivers = [];
    lastTwoDrivers = arr.slice(2,4);
    return lastTwoDrivers;
}

returnLastTwoDrivers(drivers);
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] //why no () after the function names? We're referencing not calling?


const createFareMultiplier = (int) => {
    return (fare) => fare * int;
}

createFareMultiplier(4);
//console.log(createFareMultiplier(4));

const fare = 2

const fareDoubler = (fare) => {
    return fare * 2;
}

console.log(fareDoubler(4));

const fareTripler = (fare) => {
    return fare * 3;
}

console.log(fareTripler(4));

function selectDifferentDrivers (arr, func) {
    return func(arr);
}

selectDifferentDrivers (drivers, returnFirstTwoDrivers);

console.log(selectDifferentDrivers (drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers (drivers, returnLastTwoDrivers));