import {  recursiveHanoi } from "./recursive";
import {  partEvalHanoi } from "./partEvalRecursive";
import {  yCombHanoi } from "./recursiveY";

import readline from "readline";


const rl = readline.Interface(process.stdin, process.stdout);


rl.question("Enter the number of disks: ", nDisks => {
    const disks = parseInt(nDisks);
    rl.question("1. Recursive Original\n2. Recursive PartEval\n3. Recursive Y Combinator\nEnter solver option: ", option => {
        if (option == "1") {
            recursiveHanoi(disks);
        } else if (option == "2") {
            partEvalHanoi(disks);
        } else if (option == "3") {
            yCombHanoi(disks);
        }
    });
});



