console.log("==========Assignment No-0B===========");
function reverseString(str) {
  var reverse = "";
  var stringGiven = str;
  var totalString = stringGiven.length;
  console.log(`Given String is:- "${str}"`);
  console.log("----------------After Reverse the String----------------");
  for (let index = totalString; index >= 0; index--) {
    var charAt = stringGiven.charAt(index);
    if (charAt != " ") {
      reverse = reverse + charAt
    }

  }
  console.log(`Reverse String Output:- "${reverse}"`);
  console.log("----------------------------------------------------------");

}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");
