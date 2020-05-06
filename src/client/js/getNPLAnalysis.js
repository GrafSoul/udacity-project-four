/**
* @description  Function for sending url news to the server.
* @param {string} url - link for the server router.
* @param {object} data - url news to send to the server.
* @returns {object} - array of objects to store on the server.
*/
const getNPLAnalysis = async(url = '', data = {}) => {
    let result = {};
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        result = await response.json();        
        return result;        
    } catch(error) {
        result.status = 'Invalid getting data';
        return result;
    }
};

export { getNPLAnalysis };