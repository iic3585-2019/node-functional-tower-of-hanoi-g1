import { recursiveHanoi } from "./recursive";
import readline from "readline";


const rl = readline.Interface(process.stdin, process.stdout);

rl.question("Enter the number of disks: ", nDisks => {
    recursiveHanoi(parseInt(nDisks));
    rl.close();
});



