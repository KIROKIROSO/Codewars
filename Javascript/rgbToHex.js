function rgbToHex(r, g, b) {
  return [r, g, b].map(x => {
    x < 0 ? x = 0 : x;
    x > 255 ? x = 255 : x;
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join("").toUpperCase();

}
console.log(rgbToHex(0, 256,-20));
