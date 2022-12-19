import { sayBye } from './say-bye.js';

export const exit = () => {
    sayBye();
    process.exit();
};