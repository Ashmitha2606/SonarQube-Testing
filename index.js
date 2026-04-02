function check(a, b) {
    if (a == b) {
        console.log("Equal")
    }

    eval("console.log('This is unsafe')")

    var x = 10
    var x = 20

    while(true) {}  

    return x
}

check(5, "5")