const removeFromArray = function(arr,value) {
   for(let pos = 0; pos<arr.length; pos++){
     if(arr[pos] === value){
        arr.splice(pos,1);
        break;
     }
   }

   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
