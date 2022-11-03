function do_assignment(callback) {
    console.log(" I am Doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}
do_assignment(copy_assignment);



function display(){
    console.log("Hello Sushant -> You are Excellent React JS Developer");
}

setInterval(display, 5000);