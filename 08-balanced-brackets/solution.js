function balancedBrackets(left, right, string, array) {
  if (left === 0 && right === 0) {
    array.push(string)
  }
  if (left > 0) {
    balancedBrackets(left - 1, right + 1, string + "(", array)
  }
  if (right > 0) {
    balancedBrackets(left, right - 1, string + ")", array)
  }
  return array;
}

balancedBrackets(3,0,"",[])
