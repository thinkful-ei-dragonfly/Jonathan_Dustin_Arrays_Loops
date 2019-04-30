'use strict';
function max(num){
  let result = num[0];
  let i = 0;
  while(i < num.length){
    if(num[i] > result){
      result = num[i];
    }
    i++;
  }    
  return result;
}

function min(num){
  let result = num[0];
  let i = 0;
  while(i < num.length){
    if(num[i] < result){
      result = num[i];
    }
    i++;
  }
  return result;
}

let arr = [0,1,2,3,7,25];
console.log(max(arr));
console.log(min(arr));