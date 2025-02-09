function findEvenIndex(arr) {
  //Use a FOR loop to iterate through the array, checking to see if the leftsidesum an drightsideSum match
  for (let i = 0; i < arr.length; i++) {
    //use the slice() method to obstain a copy of the array from the start [0] to just before the i
    let leftSideSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    //Use the slice() method to obtain a copy of the array from just after the i to the end of the array
    let rightSideSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    //Compare the two side; if equal return the number that i was on at the time
    if (leftSideSum === rightSideSum) {
      return i;
    }
  } 
    //If it doesn't happen that the two sides equal each other, return -1
    return -1;
}