/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!
/*  */
// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highsScore = 29;


// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];

console.log(myScrabbleTiles);


// A function to push the values on to the objects in the array
// I moved this function up here in an attempt to debug
function addTiles(letter,score){ 
  // 
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
  for(i=0;i<anArray.length;i++){
    sum = sum + anArray[i].score; //
  return sum;

  }
console.log(sum);
// even following along in class im not sure why this isnt working
}
// its outputting not a number and I think its trying to access the letter values in my scrabble tile array

console.log(sumTiles(myScrabbleTiles));


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
let myScore = sumTiles(myScrabbleTiles);

// 8. Check whether or not your score is higher than the highScore.

myScore= 30;

if (myScore>highsScore){
highsScore = myScore;
}


//else console.log(highscore);  
// 8-1 If your score is higher, change highScore to the new high score.




// DONE!