// problem01
function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  } else {
    fare = fare + fare * (20 / 100) + 30;
  }
  return fare;
}

// console.log(totalFine("Gorib tai ticket kinar tk nai"));




// problem 02
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




// problem 03
function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  let player01 = player1.foul + player1.cardY + player1.cardR;
  let player02 = player2.foul + player2.cardY + player2.cardR;
  if (player01 < player02) {
    return player1.name;
  }
  else if(player01 === player02){
    return "Tie"
  }
   else {
    return player2.name;
  }
}

// console.log(
//   bestTeam(
//     { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
//   )
// );





// problem 04
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




// problem 05
function resultReport(marks) {
  // You have to write your code here
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let totalNum = 0;
  for (let gorNUm of marks) {
    totalNum += gorNUm;
  }
  let finalGor = totalNum / marks.length;
  if (finalGor === 0) {
    return 0;
  }
  let PassCount = 0;
  for (let passNum of marks) {
    if (passNum >= 40) {
      PassCount++;
    }
  }
  let failCount = 0;
  for (let failNum of marks) {
    if (failNum < 40) {
      failCount++;
    }
  }
  return { finalScore: Math.round(finalGor), pass: PassCount, fail: failCount };
}

// console.log(resultReport(100));

