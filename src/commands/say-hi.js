import { hiPhrase } from '../utils/return-welcome-phrase.js';
import { getUserNameFromArgs } from '../utils/get-user-name.js';
import { returnCliMessage } from '../utils/return-cli-message.js';
//import { cwd } from 'node:process';

export const sayHi = () => {
    const userArgs = process.argv.slice(2);
    returnCliMessage(hiPhrase(getUserNameFromArgs(userArgs)));
    //console.log(`Current directory: ${cwd()}`);
};