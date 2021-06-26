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

function makeRectangle(height) {
   let rectangle = '';
   for (let i = 0; i < height; i++) {
      rectangle += (makeLine(5) + '\n');
   }
   return rectangle.slice(0, -1);
}
console.log(makeRectangle(3)+ '\n');
console.log();

function makeDownwardStairs(height){
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i + 1) + '\n');
  }
  return stairs.slice(0,-1);
}
console.log(makeDownwardStairs(5,1));

function repeatString(string, height){
   let lineSpace = '';
  for (let i = 0; i < height; i++) {
    lineSpace += (i + 1);
  return lineSpace;
}
console.log(repeatString(6));

