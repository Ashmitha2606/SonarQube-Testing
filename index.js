function check(a, b) {
    if (a == b) {
        console.log("Equal")
    }

    eval("console.log('unsafe')")

    var x = 20
    var x = 30

    if (true) {
    }

    return x
}

check(5, "5")