import { stat } from 'fs';
import { getNewPath } from '../path/get-new-path.js';

export const runCd = (args) => {
    const [pathAdditionRaw] = args;
    const pathAddition = removeQuotesFromPath(pathAdditionRaw);

    const newPath = getNewPath(pathAddition);

    stat(newPath, (error, stats) => {
        setCurrentPath(newPath);
        showCurrentPath();
    });
};