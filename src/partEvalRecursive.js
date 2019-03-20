import { displayProgress, moveDisk, createReverseRange } from "./util";


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
