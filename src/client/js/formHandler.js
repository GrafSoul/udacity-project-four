'use strict';
/* eslint-disable indent */
/* eslint-disable no-undef */
/**
* @description  Event listener function for the form.
* @param {event} e - data received when an event occurred.
*/
const handleSubmit = (e) => {
    e.preventDefault();

    let formURL = document.getElementById('url').value;
    const routeURL = 'http://localhost:3030/analysis';

   if (formURL) {
        getNPLAnalysis(routeURL, {url: formURL})
        .then(function (analysis) {
           console.log(analysis);
        });      
    }
};

/**
* @description  Function for sending url news to the server.
* @param {string} url - link for the server router.
* @param {object} data - url news to send to the server.
* @returns {object} - array of objects to store on the server.
*/
async function getNPLAnalysis(url = '', data = {}) {
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
}

export { handleSubmit, getNPLAnalysis };
