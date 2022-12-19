import { byePhrase } from '../utils/return-bye-phrase.js';
import { getUserNameFromArgs } from '../utils/get-user-name.js';
import { returnCliMessage } from '../utils/return-cli-message.js';

export const sayBye = () => {
    const userArgs = process.argv.slice(2);
    returnCliMessage(byePhrase(getUserNameFromArgs(userArgs)));
};