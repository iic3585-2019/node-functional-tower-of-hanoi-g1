
export const createReverseRange = (length) => Array(length).fill().map((x, i) => length - i) ;

export const styledArrayString = (array) => "[" + array + "]\n" ; 

export const displayProgress = (stackA, stackB, stackC) => {
    let output = "=========\n";
    output += styledArrayString(stackA);
    output += styledArrayString(stackB);
    output += styledArrayString(stackC);
    console.log(output);
}

export const moveDisk = (target, source) => {
    target.push(source.pop());
}
