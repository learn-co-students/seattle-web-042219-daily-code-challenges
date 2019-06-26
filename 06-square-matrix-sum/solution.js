let test = [
[1,2,3,1],
[5,6,8,1],
[4,7,1,1],
[1,1,1,1]];

function matrixDiagonals(matrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  let i = 0;

  matrix.forEach((el) => {
    console.log(el[i]);
    diagonal1 += el[i];
    diagonal2 += el[el.length - (i + 1)];
    i++
  })
  return `The sum of both diagonals: ${diagonal1 + diagonal2}`;
}

console.log(matrixDiagonals(test));

