function balanceWeights(arr){

  let [a, b] = arr

  const toBeBalanced = JSON.parse(a);
  const balancers = JSON.parse(b);
  const weightsDifference = Math.abs(toBeBalanced[0]- toBeBalanced[1])

  for (weight in balancers){
    if (balancers[weight] == weightsDifference){
      console.log(balancers[weight])
      return [balancers[weight]].toString()
    }
  }

  for(let i=0; i<balancers.length; i++){
    for(let j=i+1; j<balancers.length; j++){
      if (Math.abs(balancers[i] - balancers[j]) == weightsDifference || balancers[i]+ balancers[j] == weightsDifference){
        return[balancers[i], balancers[j]].sort().toString()
      }
    }
  }

  return 'not possible'
}

const arr = ["[11, 1]", "[7, 17, 3, 6, 14]"]

console.log(balanceWeights(arr)); // expected output: "17, 7"
