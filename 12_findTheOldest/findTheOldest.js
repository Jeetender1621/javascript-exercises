const findTheOldest = function(array) {
   let ageDesc = array.sort( (a,b) =>{
       const lastOne = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth :  new Date().getFullYear() - a.yearOfBirth;
       const nextOne = b.yearOfDeath? b.yearOfDeath - b.yearOfBirth :  new Date().getFullYear() - b.yearOfBirth ;
       return lastOne - nextOne;
   })
   return ageDesc[ageDesc.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
