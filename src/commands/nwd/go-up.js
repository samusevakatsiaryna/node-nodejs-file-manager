import { stat } from 'fs';
import { getNewPath } from '../path/get-new-path.js';
import {currentPath, setCurrentPath, showCurrentPath} from '../path/current-path.js';

export const goUp = () => {

    const pathPrefix = '..';
    const newPath = getNewPath(pathPrefix);

    if (currentPath === newPath) {
        throw new Error('THIS IS ROOT DIRECTORY');
    }

    stat(newPath, (err, stats) => {
            setCurrentPath(newPath);
            showCurrentPath();
    });
};