import { displayProgress, moveDisk, createReverseRange } from "./util";

// original code from https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_solution 


export const recursiveHanoi = (nDisks) => {
    const stackA = createReverseRange(nDisks);
    const stackB = [];
    const stackC = [];

    const move = (n, source, target, aux) => {
        if (n > 0) {
            move(n - 1, source, aux, target);

            moveDisk(target, source);

            displayProgress(stackA, stackB, stackC);

            move(n - 1, aux, target, source);
        }
    };
    move(nDisks, stackA, stackC, stackB);
};