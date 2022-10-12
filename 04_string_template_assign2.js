
console.log("=============================Assignment No-02===============================");
var stringHandsOn = function () {
    var string = "   Hey you are doing good, keep it up   ";
    console.log(`1.String before performing any operation:- ${string}`);

    console.log("============================================================");
    console.log(`2.length of sting:${string.length}`);

    console.log("============================================================");
    var trimResult = string.trim();
    console.log(`3.After removing spaces:-${trimResult}`);


    console.log("============================================================");
    var count = (string.length - trimResult.length);
    console.log(`4.count space =${count}`);

    console.log("============================================================");
    var character = trimResult.charAt(0);
    var charResult = trimResult.charAt(trimResult.length - 1);
    console.log(`5.first character:${character}   And last character: ${charResult}`);

    console.log("============================================================");
    var spaceCount = trimResult.split(" ");
    console.log(`6.total words count= ${spaceCount.length}`);

    console.log("============================================================");
    var position = string.indexOf("good");
    console.log(`7.indexof word "good" =${position}`);

    console.log("============================================================");
    console.log(`8.1 substring from 22= ${string.substring(22)}`);

    console.log(`8.2 slice from 22=${string.slice(22)}`);

    console.log("============================================================");
    console.log(`9.string end with up:${trimResult.endsWith("up")}`);
    console.log("============================================================");
    console.log(`10.string start with Hey:${trimResult.startsWith("Hey")}`);
    console.log("============================================================");
}
stringHandsOn();






