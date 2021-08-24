function sumTwoSmallestNumbers(numbers) {  
  const num = numbers;
  let arr = []; 
  let count = 0;
  for (let i in numbers) {
    if (count >= 2) {
      break
    }
    let test = Math.min(...num)
    let indexNum = num.indexOf(test);
    num.splice(indexNum, 1)
    arr.push(test)
    count++;
  }

  return arr[0] + arr[1]
