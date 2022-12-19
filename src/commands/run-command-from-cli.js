import { exit } from './exit.js';
import { goUp } from './nwd/go-up.js';
import { runCd } from './nwd/run-cd.js';

export const runCommandFromCli = async (userCommand) => {

    switch (userCommand) {
        case '.exit':
            exit();
            break;
        case '.up':
            goUp();
            break;
        case '.cd':

            runCd();
            break;
        default:

            break;
    }
};