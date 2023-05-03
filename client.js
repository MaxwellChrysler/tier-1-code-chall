/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');

// Write your code here!
/*  */
// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29; // I spelt this as highsScore so with two S's in there


// 2. Make a new empty array called myScrabbleTiles.

let myScrabbleTiles = [];

// A function to push the values on to the objects in the array
// I moved this function up here in an attempt to debug
function addTiles(letter, score) {
  let addATile = {
    letter: letter,
    score: score
  }
  myScrabbleTiles.push(addATile);
}

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/

// using addTiles to add the objects into the array

addTiles('N', 1);
addTiles('Z', 5);
addTiles('Z', 10);
addTiles('X', 8);
addTiles('D', 2);
addTiles('A', 1);

console.log(myScrabbleTiles);



// 4. Remove the last tile from myScrabbleTiles.
// use pop to remove the last item in the array

myScrabbleTiles.pop();


// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
// use addTiles function
addTiles('F', 4);

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(anArray) { // MAKE SURE TO RETURN
  let sum = 0;
  for (let i = 0; i < anArray.length; i++) {
    sum = sum + anArray[i].score; //
    //return sum; This return stopped the loop from going on and the code just stopped because the return ended it from looping
  }
   return sum;
}

console.log(sumTiles(myScrabbleTiles));


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".

let myScore = sumTiles(myScrabbleTiles);

// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.

console.log('myScore:', myScore);
console.log('highScore', highScore);

if (myScore > highScore) {
  highScore = myScore;
}

console.log('myScore:', myScore);
console.log('highScore', highScore);
// DONE!


// Issues with the code :
// The code would only output the sum of the first value of the array (so just the first number)
// Console logging sumTiles(myScrabbleTiles) would output undefined
/* ERRORS 
line 72: I used return within the function and that prevented the other values in the array to keep adding up
line 77: comment that I couldn't figure out why it wasn't working and it was because the placement of the return
line 85: the function sumTiles was not getting any values to output because return sum was just dumping into an area that myScore couldn't access

*/