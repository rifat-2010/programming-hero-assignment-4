function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    let result = str.replaceAll(" ", "").toUpperCase();
    return result;
  }
}

// console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "))
