const userNamePrefix = '--username=';

export const getUserNameFromArgs = (argsArray) => {
    for (let i = 0; i < argsArray.length; i++) {
        if (argsArray[i].startsWith(userNamePrefix)) {
            const username = argsArray[i].slice(userNamePrefix.length).trim();
            return username;
        }
    }
    return '//!!';
};