
export const createReverseRange = (length) => Array(length).fill().map((x, i) => length - i) ;

export const createRange = (length) => Array(length).fill().map((x, i) => i + 1) ;

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


export const getTotalMoves = (nDisks) => Math.pow(2, nDisks) - 1 ;

export const legalMove = (stackA, stackB) => {
    if (!stackB.length) {
        moveDisk(stackB, stackA);
    } else if (!stackA.length) {
        moveDisk(stackA, stackB);
    } else if (stackA[stackA.length-1] > stackB[stackB.length-1]) {
        moveDisk(stackA, stackB);
    } else if (stackA[stackA.length-1] < stackB[stackB.length-1]) {
        moveDisk(stackB, stackA);
    }
};