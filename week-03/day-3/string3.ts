// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function stringFallenStars (string: any): string {
  if (string.length === 1) {
    return string
  } else {
    if (string[0] !== ' ' && string[0] !== '*') {
      return `${string[0]}*` + stringFallenStars (string.slice(1, string.length));
    } else {
    return string[0] + stringFallenStars (string.slice(1, string.length))
    }
  }
}

console.log ('xXx my x-es are the best xXx');

console.log (stringFallenStars ('xXx my x-es are the best xXx'));