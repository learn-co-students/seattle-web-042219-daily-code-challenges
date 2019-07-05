function missingNumber(missingArray){

  const fullArray = [];

  for (var i = 1; i <= missingArray.length + 1; i++) {
     fullArray.push(i);
  }

  const missingNum = missingArray.reduce((start, end) => start + end);

  const totalSum = fullArray.reduce((start, end) => start + end);

  return totalSum - missingNum

}

missingNumber([1,2,4,5,6]) // expected output: 3
