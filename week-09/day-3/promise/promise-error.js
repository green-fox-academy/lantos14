'use strict';

// const parsePromised = (jsonInput) => {
//   return new Promise((resolve, reject) => {
//     try {
//       resolve(JSON.parse(jsonInput))
//     } catch (error) {
//       reject(error);
//     }
//   })
// }



// parsePromised(process.argv[2]).then(console.log).catch(console.log);



function parsedPromised(json) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(json))
    }
    catch (error) {
      reject(error)
    }
  })
}

parsedPromised(process.argv[2])
  .then(console.log)
  .catch(console.log)