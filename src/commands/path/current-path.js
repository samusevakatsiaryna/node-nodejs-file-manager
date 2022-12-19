import { returnCliMessage } from '../../utils/return-cli-message.js';
import { homedir } from 'os';

export let currentPath = homedir();

export const setCurrentPath = (newPath) => {
    currentPath = newPath;
};


export const showCurrentPath = () => {
    returnCliMessage(`You are currently in ${currentPath}`);
};
