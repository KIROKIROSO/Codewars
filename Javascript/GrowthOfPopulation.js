// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) {
    p0 = p0 + (p0 * (percent / 100)) + aug;
  }
  return y;
     
}

console.log(nbYear(1500000, 0.25, 1000, 2000000))
