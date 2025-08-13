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
