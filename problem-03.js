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
