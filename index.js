let size;

function makeLine(size) {
   let line = '';
   for (let i = 0; i < size; i++) {
      line += '#';
   }
   return line;
}

console.log(makeLine(5));


function makeSquare(width, height){
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0,-1);
}

console.log(makeSquare(5,3));


function makeDownwardStairs(height){
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i + 1) + '\n');
  }
  return stairs.slice(0,-1);
}

console.log(makeDownwardStairs(5,1));


