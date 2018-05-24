// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function stringTransformerXY (string: any): string {
  if (string.length === 0) {
    return string
  } else {
    if (string[0] === 'x') {
      return string[0].replace ('x', 'y') + stringTransformerXY (string.slice(1, string.length));
    } else {
    return string[0] + stringTransformerXY (string.slice(1, string.length))
    }
  }
}

console.log ('xXx my x-es are the best xXx');

console.log (stringTransformerXY ('xXx my x-es are the best xXx'));