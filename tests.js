var stringTest = ["hello", "world", "sfsfdf", "sdfdsfsdf"]
var stringTest2 = ["hello", "vova"]
var num = Math.random();

function newFunction(a, b, c, d, e) 
{
    if(a, b, c, d != undefined ) {
        return a + " " + b + " " + c + " " + d + " " + e     
    } if(a, b, c, d == undefined) {
        return a + " " + b
    }
}

for(var i = 0; i < stringTest.length; i++){
    console.log(
        newFunction(stringTest[0], stringTest[1], stringTest[2], stringTest[3], num) 
    )
}

for(var n = 0; n < stringTest2.length; n++) {
    console.log(
        newFunction(stringTest2[0], stringTest2[1]) 
    )
}

