
const addArrayStyle = (array) => "[" + array + "]\n" ; 

export const displayProgress = (stackA, stackB, stackC) => {
    let output = "=========\n";
    output += addArrayStyle(stackA);
    output += addArrayStyle(stackB);
    output += addArrayStyle(stackC);
    console.log(output);
}

export const moveDisk = (target, source) => {
    target.push(source.pop());
}