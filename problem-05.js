function resultReport(marks) {
  // You have to write your code here
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let totalNum = 0;
  for (let gorNUm of marks) {
    totalNum += gorNUm;
  }
  let finalGor = totalNum / marks.length;
  
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

console.log(resultReport([]));
