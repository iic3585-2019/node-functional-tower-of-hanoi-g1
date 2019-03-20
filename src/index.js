import readline from "readline";
import {  recursiveHanoi } from "./recursive";
import {  partEvalHanoi } from "./partEvalRecursive";
import {  yCombHanoi } from "./recursiveY";
import {  iterativeHanoi } from "./iterative";


const rl = readline.Interface(process.stdin, process.stdout);

rl.question("Enter the number of disks: ", nDisks => {
    const disks = parseInt(nDisks);
    rl.question("1. Recursive Original\n2. Recursive PartEval\n3. Recursive Y Combinator\n4. Iterative\nEnter solver option: ", option => {
        switch (option) {
        case "1":
            recursiveHanoi(disks);
            break;
        case "2":
            partEvalHanoi(disks);
            break;
        case "3":
            yCombHanoi(disks);
            break;
        case "4":
            iterativeHanoi(disks);
            break;
        }
    });
});

