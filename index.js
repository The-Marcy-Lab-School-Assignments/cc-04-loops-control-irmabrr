//Write your solutions in this file, don't forget to test your functions.

function countFromOne(num) {
  for (let i = 1; num >= i; i++) {
    console.log(i);
  }
}

countFromOne(10);

function countEveryOdd(int) {
  for (let j = 1; int >= j; j += 2) {
    console.log(j);
  }
}
countEveryOdd(10);

function isNegative(arg) {
  if (arg <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isNegative(Math.PI));

function betweenFiveAndTwenty(para) {
  if (para >= 5 && para <= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(betweenFiveAndTwenty(100));

const sumOfThreeOrFive = () => {
  let sum = 0;
  //sum variable made to continue adding to this
  //will be adding within the for loop
  for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      //when you have a = in front of a variable you are reassigning it
      //console.log(sum);
    }
  }
  // we return sum outside of the for loop to give us a final total, so we arent constantly printing sum after
  //every iteration
  return sum;
};
console.log(sumOfThreeOrFive());
//if sum was declared in the for loop it will reset every time it is run
// anything inside {} cannot be accessed outside of the {}

const isAllLowerCase = (str) => {
  if (str.toLowerCase() === str) {
    //we will be comparing the string to string.toLowerCase to make sure they match
    // === has to be exact and it will return a true or false so if we wanted we can just write
    // return str.toLowerCase() === str;
    return true;
  } else {
    false;
  }
};

console.log(isAllLowerCase("hello"));
