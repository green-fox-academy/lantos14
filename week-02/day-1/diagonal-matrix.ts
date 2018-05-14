// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function matrix (size) {
  let row: any[] = [];
  for (let i=0; i < size; i++ ){
    row[i] = [];
      for (let j=0; j < size; j++)
        if ( j === size-1-i){
          row[i][j] = 1;
        } else {
          row[i][j] = 0;
        }
  }
  console.log (row); 
  }



matrix (6);
