/* eslint-disable no-undef */
'use strict';
/**
* @description  Event listener function for the form.
* @param {event} e - data received when an event occurred.
*/
const handleSubmit = (e) => {
    e.preventDefault();

    let resultToPage = document.getElementById('results');
    let resultsSection = document.querySelector('.results-section');
    let error = document.querySelector('.error');
    let loader = document.querySelector('.loader');
    let url = document.getElementById('url');
    let validate = Client.urlValidator(url.value);

    const routeURL = 'http://localhost:3030/analysis';

    if (validate) {
        loader.style.display = 'block';

        Client.getNPLAnalysis(routeURL, {url: url.value})
            .then(analysis => {
                if(analysis.status === '200') {
                    url.value = '';
                    loader.style.display = 'none'; 
                    resultToPage.innerHTML = '';
                    analysisResult(analysis, resultToPage, resultsSection);
                } else {
                    error.style.display = 'block';
                    loader.style.display = 'none'; 
                    error.innerText = 'The news you specified was not found!';
                    error.addEventListener('mouseover', () => {
                        error.style.display = 'none';
                    });
                }
            });      
    } else {
        url.value = '';
        loader.style.display = 'none'; 
        error.style.display = 'block';
        error.innerText = 'You entered the wrong url address!';
        error.addEventListener('mouseover', () => {
            error.style.display = 'none';
        });
    }
};

/**
* @description  The function adds the analysis results to the app page.
* @param {object} data - the object contains the results of analysis.
* @param {Node} resultElement - Element on the page where new information will be added.
* @param {Node} resultsSection - Section on the page where new information will be added.
*/
const analysisResult = (data, resultElement, resultsSection) => { 
    let entryElements = `
        <div class="result-info">

            <div class="polarity">Polarity: <b>${data.polarity}</b></div>
            <div class="polarity-confidence">
                Polarity confidence: <b>${data.polarity_confidence.toFixed(2)}</b>
            </div>

            <div class="subjectivity">Subjectivity: <b>${data.subjectivity}</b></div>
            <div class="subjectivity-confidence">
                Subjectivity confidence: <b>${data.subjectivity_confidence.toFixed(2)}</b>
            </div>

            <div class="text">${data.text}</div>

        </div>
    `;
    resultsSection.style.display = 'block';
    resultElement.innerHTML = entryElements;
};

export { handleSubmit };
