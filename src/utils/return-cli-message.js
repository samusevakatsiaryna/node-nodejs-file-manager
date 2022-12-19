import { EOL } from 'os';

export const returnCliMessage = (str) => {
    process.stdout.write(`${str}${EOL}${EOL}`);
};