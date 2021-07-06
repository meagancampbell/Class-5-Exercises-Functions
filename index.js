let size;

function makeLine(size) {
   let line = '';
   for (let i = 0; i < size; i++) {
      line += '#';
   }
   return line;
}
console.log(makeLine(5)+ '\n');
console.log();

function makeSquare(height){
  let square = ''; 
  for (let  i = 0; i < height; i++) {
    square += (makeLine(5) + '\n');
  }
  return square.slice(0, -1);
}
 
console.log(makeSquare(4));
console.log();

function makeRectangle(width, height) {
   let rectangle = '';
   for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
   }
   return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3)+ '\n');
console.log();

function makeDownwardStairs(height){
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i + 1) + '\n');
  }
  return stairs.slice(0,-1);
}
console.log(makeDownwardStairs(5));
console.log();

function repeatString(width){
   let lineSpace = '_';
  for (let i = 0; i < width; i++) {
    lineSpace += (makeLine(3) + '\n');
  }
  return lineSpace.slice(0,-1);
}
console.log(repeatString(5));