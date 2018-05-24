// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function stringDestroyX (string: any): string {
  if (string.length === 0) {
    return string
  } else {
    if (string[0] === 'x') {
      return string[0].replace ('x', '') + stringDestroyX (string.slice(1, string.length));
    } else {
    return string[0] + stringDestroyX (string.slice(1, string.length))
    }
  }
}

console.log ('xXx my x-es are the best xXx');

console.log (stringDestroyX ('xXx my x-es are the best xXx'));