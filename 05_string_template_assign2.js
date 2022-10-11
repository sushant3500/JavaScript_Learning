console.log(`=========Assignment No-02============`);
var imp = function stringHandsOn() {
    var string = "  Hey you are doing good, keep it up  ";
    console.log('1. Print of String:-', string);
    var LengthOfString = string.length;
    console.log("---------------------------------------------");
    console.log(`2. Length of given string is:`, LengthOfString);
    console.log("---------------------------------------------");
    var space = string.trim();
    console.log('3.Removing spaces:-', space);
    console.log("---------------------------------------------");
    var count = space.length;
    var sush = LengthOfString - count;
    console.log("4.count spaces:-", sush);
    console.log("---------------------------------------------");
    console.log("5.first character:-", space.charAt(0), "last character:-", space.charAt(count - 1));
    console.log("---------------------------------------------");
    var noOfWords = space.split(" ");
    console.log("6.Total no.of words:-", noOfWords.length);
    console.log("---------------------------------------------");
    console.log(`7.Index no. of "good":-`, string.indexOf("good"));
    console.log("---------------------------------------------");
    console.log(`8.1.substring from index 22:-`, string.substring(22));
    console.log(`8.2.slice from index 22:-`, string.slice(22));
    console.log("---------------------------------------------");
    console.log(`9.string end with "up":-`, string.includes("up"));
    console.log("---------------------------------------------");
    console.log(`10.string start with "Hey":-`, space.includes("Hey"));
    console.log("---------------------------------------------");
}
imp();


