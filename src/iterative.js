import { displayProgress, moveDisk, createReverseRange, getTotalMoves } from "./util";


const legalMove = (stackA, stackB) => {
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

const iterativeHanoi = (nTotalMoves, source, aux, target, display) => {
    for (let i = 1; i <= nTotalMoves; i++){ 
        if (i % 3 == 1){
            legalMove(source, target); 
        } else if (i % 3 == 2) {
            legalMove(source, aux); 
        } else if (i % 3 == 0) {
            legalMove(aux, target); 
        }
        display();
    } 
};


export const iterativeHanoiSolver = (nDisks) => {
    const source = createReverseRange(nDisks);
    const aux = [];
    const target = [];

    const display = () => nDisks % 2  ? 
        displayProgress(source, aux, target) :
        displayProgress(source, target, aux); 
    
    const nTotalMoves = getTotalMoves(nDisks);
    iterativeHanoi(nTotalMoves, source, aux, target, display);        
};