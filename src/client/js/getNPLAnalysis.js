'use strict';
/**
* @description  Function for sending url news to the server.
* @param {string} url - link for the server router.
* @param {object} data - url news to send to the server.
* @returns {object} - object to store on the server.
*/
const getNPLAnalysis = async (url = '', data = {}) => {
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await response.json();
    }
    catch (error) {
        return error;
    }
};

export { getNPLAnalysis };