import { resolve } from 'path';
import {currentPath} from './current-path.js';
//import { isAbsolute } from 'path';

export const getNewPath = (newLinkPart) => {

    let newPath = currentPath;

    newPath = resolve(currentPath, newLinkPart);
    return newPath;
};