export const invertColor = (hexTripletColor: string) => {
  let color = hexTripletColor;
  if (color === null || color === undefined || color.trim() === '') return color;
  color = color.substring(1); // remove #
  let intColor = parseInt(color, 16); // convert to integer
  intColor = 0xFFFFFF ^ intColor; // invert three bytes
  color = intColor.toString(16); // convert to hex
  color = ("000000" + color).slice(-6); // pad with leading zeros
  //color = "#" + color; // prepend #
  color = "#" + color; // prepend #
  return color;
}

export const getNextColor = (color: string) => {
  let result = color;
  let splittedColor = color.split('.')
  if (splittedColor.length > 1) {
    const idx = +(splittedColor[splittedColor.length - 1]) + 1;
    splittedColor.splice(-1);
    result = splittedColor.join('.') + '.' + idx.toString()
  } 
  
  return result;
}