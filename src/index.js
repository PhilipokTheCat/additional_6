module.exports = function zeros(expression) {
  var arr = expression.split("*");
  var twoCount = 0;
  var fiveCount = 0;
  var arr = arr.forEach(function(elem){
    var num = parseInt(elem);
    while (num > 0)
    {
      var tempNum = num;
      while (true){
        if (tempNum % 10 == 0){tempNum /= 10; twoCount++; fiveCount++;}
        else if (tempNum % 5 == 0) {tempNum /= 5; fiveCount++;}
        else if (tempNum % 2 == 0) {tempNum /= 2; twoCount++;}
        else break;
      }
      if (elem.slice(elem.length-2, elem.length) === '!!') num -= 2;
      else num--;
    }
  });
  return Math.min(twoCount, fiveCount);
}
