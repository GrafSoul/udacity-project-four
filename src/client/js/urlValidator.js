'use strict';
/**
* @description  Validation function for the entered url.
* @param {string} url - url of the news sent by the user.
* @returns {boolean} - the result is true or false if the url is correct.
*/
const urlValidator = url => {
    let regexp = /^((http|https):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i;
    let result = (regexp.test(url)) ?  true : false;
    return result;
};

export { urlValidator };
