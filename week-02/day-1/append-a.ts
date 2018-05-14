// -  Create an array variable named `animals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

const animals = ['kuty', 'macsk', 'cic'];

animals.forEach (function (item: string, index: number) {
  animals[index] = `${item}a`;
})

console.log (animals);

