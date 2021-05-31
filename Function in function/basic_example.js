function outter(param){
    function inner(theInput) {
        return theInput * 2;
    }

    return "The result is " + inner(param);
}

console.log(outter(2));