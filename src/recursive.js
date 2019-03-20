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

const almost_move = f => parameters => {

    let [n, source, target, aux, A, B, C] = parameters;
    
    if (n > 0) {
        f([n - 1, source, aux, target, A, B, C]);

        moveDisk(target, source);

        displayProgress(A, B, C);

        f([n - 1, aux, target, source, A, B, C]);
    }
};

const Y = f => (x => x(x))(x => f(y => (x(x))(y)));

const Ymove = Y(almost_move);

export const yCombHanoi = (nDisks) => {
    const stackA = createReverseRange(nDisks);
    const stackB = [];
    const stackC = [];
    Ymove([nDisks, stackA, stackC, stackB, stackA, stackB, stackC]);
}

export const partEvalHanoi = (nDisks) => {
    const stackA = createReverseRange(nDisks);
    const stackB = [];
    const stackC = [];
    const move = n => (source, target, aux) => {
        if (n == 0) return;
        const little = move(n-1);
        little(source, aux, target);
        moveDisk(target, source);
        displayProgress(stackA, stackB, stackC);
        little(aux, target, source);
    };
    move(nDisks)(stackA, stackC, stackB);
};
