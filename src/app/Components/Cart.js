const array = [2,4,5,3,3,6]

// console.log(array);

const index = array.findIndex(i=>i===3);
if (index > -1) { // only splice array when item is found
  array.splice(index,1); // 2nd parameter means remove one item only
}
// array = [2, 9]
console.log(array)
