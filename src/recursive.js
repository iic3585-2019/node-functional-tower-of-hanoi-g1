import { displayProgress, moveDisk, createReverseRange } from "./util";

// original code from https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_solution 


const move = (n, source, target, aux, A, B, C) => {
    if (n > 0) {
        move(n - 1, source, aux, target, A, B, C);

        moveDisk(target, source);

        displayProgress(A, B, C);

        move(n - 1, aux, target, source, A, B, C);
    }
};

const almost_move = f => {
    return (parameters => {

        let [n, source, target, aux, A, B, C] = parameters;
        
        if (n > 0) {
            f([n - 1, source, aux, target, A, B, C]);

            moveDisk(target, source);

            displayProgress(A, B, C);

            f([n - 1, aux, target, source, A, B, C]);
        }
    });};

const Y = f => (x => x(x))(x => f(y => (x(x))(y)));

const Ymove = Y(almost_move);

export const recursiveHanoi = (nDisks, rType) => {
    const stackA = createReverseRange(nDisks);
    const stackB = [];
    const stackC = [];
    if (rType === 0) {
        move(nDisks, stackA, stackC, stackB, stackA, stackB, stackC);
    } else {
        Ymove([nDisks, stackA, stackC, stackB, stackA, stackB, stackC]);
    }
};
