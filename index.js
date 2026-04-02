function check(a,b){
    if(a == b){
        console.log("Equal")
    }
    eval("console.log('bad practice')")
}

check(5,"5")