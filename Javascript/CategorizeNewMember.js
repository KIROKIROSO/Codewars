// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
  // declare new array to store the output
  let arr = [];
  // loop through data
  const test = data.map(x => {
    let age = x[0];
    let handicap = x[1]
    // if statement
    if (age >= 55 && handicap > 7) {
      arr.push("Senior")
    } else if (age >= 55 && handicap <= 7) {
      arr.push("Open")
    } else if (age < 55 && handicap >=-2) {
      arr.push("Open")
    }
    
  })
  return arr;
}


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
