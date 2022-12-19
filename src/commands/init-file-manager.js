import readline from 'readline';
import { runCommandFromCli } from './run-command-from-cli.js';
import { sayHi } from './say-hi.js';
import { showCurrentPath } from '../commands/path/current-path.js';
import { exit } from './exit.js';

export const initFileManager = async () => {
    const readingLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    sayHi();
    showCurrentPath();

    readingLine
        .on('line', async (line) => {
            await runCommandFromCli(line);
        })
        .on('error', (error) => {
            throwError({ error, showCurrentPath: true });
        })
        .on('end', () => {
            exit();
        });

    process.stdin.on('keypress', (chunk, key) => {
        if (key && key.name === 'c' && key.ctrl) {
            exit();
        }
    });
};