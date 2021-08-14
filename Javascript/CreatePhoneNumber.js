function createPhoneNumber(numbers){
  let [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10] = numbers;
  let test = 1;
  return `(${num1}${num2}${num3}) ${num4}${num5}${num6}-${num7}${num8}${num9}${num10}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
