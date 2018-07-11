'use strict';

first().then((result) => {
  return second(result)
}).then((result2) => {
  console.log(result2);
});
