import {superFunc} from './util';

const main = () => {
    console.log("Hola");
    const s = {name: "hola"}
    const {name} = s;
    console.log(name);
    superFunc();
};

main();