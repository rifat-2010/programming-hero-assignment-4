function isSame(arr1, arr2) {
  // You have to write your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length === arr2.length && arr1 === arr2) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSame([1 , "4" , 4] ,[1 , 4  , 4]));

