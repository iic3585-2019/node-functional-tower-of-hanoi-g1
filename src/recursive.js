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

export const hanoi2 = (nDisks) => {
    const stackA = createReverseRange(nDisks);
    const stackB = [];
    const stackC = [];
    const move = n => {
        if (n == 0) return () => null;
        return (source, target, aux) => {
            const little = move(n-1);
            little(source, aux, target);
            moveDisk(target, source);
            displayProgress(stackA, stackB, stackC);
            little(aux, target, source);
        }
    }
    move(nDisks)(stackA, stackC, stackB);
}