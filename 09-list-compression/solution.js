function listCompress(arr) {
  let segmentsStr = ""
  let i = 0
  while(i < arr.length){
    if(i === 0){
      segmentsStr = arr[0].toString()
      i++
    } else {
    let j = i - 1
    if(arr[j] + 1 !== arr[i]){
      segmentsStr = segmentsStr.concat(', ', arr[i].toString())
      i++
    } else{
      while(arr[j] + 1 === arr[i]){
        i++
        j++
      }
      segmentsStr = segmentsStr.concat('-', arr[i-1])
    }
   }
  }
  return(segmentsStr)
}

let input = [0,3,4,5,50,51,70,72]
console.log(listCompress(input))
