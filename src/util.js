
export const createReverseRange = (length) => Array(length).fill().map((x, i) => length - i) ;

export const styledArrayString = (array) => "[" + array + "]\n" ; 

export const displayProgress = (stackA, stackB, stackC) => {
    let output = "=========\n";
    output += [stackA, stackB, stackC]
        .map((val) => styledArrayString(val))
        .reduce((prev, cur) => prev += cur);
    console.log(output);
};

export const moveDisk = (target, source) => {
    target.push(source.pop());
};
