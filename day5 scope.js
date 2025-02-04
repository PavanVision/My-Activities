let globalvariable="I am global";
console.log(globalvariable);

function testFunction(){

    let functionvariable="I am in function";
   
    console.log(functionvariable);

}testFunction();

if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    
    console.log(blockVariable);       // This works inside the block
    console.log(alsoInBlock);         // This works inside the block
    console.log(notActuallyBlocked);  // This works inside the block
}

// Outside the block:
console.log(notActuallyBlocked);     // This works because `var` is function-scoped, not block-scoped

// Uncommenting the following line would cause an error because `blockVariable` is block-scoped
// console.log(blockVariable);        // Error: blockVariable is not accessible here

// Uncommenting the following line would cause an error because `alsoInBlock` is block-scoped
// console.log(alsoInBlock);          // Error: alsoInBlock is not accessible here
