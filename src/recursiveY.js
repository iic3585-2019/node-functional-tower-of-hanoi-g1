import { displayProgress, moveDisk, createReverseRange } from "./util";


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
};