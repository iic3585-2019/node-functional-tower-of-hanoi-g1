import { displayProgress,  createReverseRange, getTotalMoves, createRange,  legalMove } from "./util";

// original code from https://www.geeksforgeeks.org/iterative-tower-of-hanoi/

export const iterativeHanoiSolver = (nDisks) => {
    const source = createReverseRange(nDisks);
    const aux = [];
    const target = [];

    const display = () => nDisks % 2  ? 
        displayProgress(source, aux, target) :
        displayProgress(source, target, aux); 
    
    const nTotalMoves = getTotalMoves(nDisks);

    createRange(nTotalMoves).forEach( i => { 
      if (i % 3 == 1){
          legalMove(source, target); 
      } else if (i % 3 == 2) {
          legalMove(source, aux); 
      } else if (i % 3 == 0) {
          legalMove(aux, target); 
      }
      display();
  }) 
     
};