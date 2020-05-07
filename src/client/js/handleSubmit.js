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
    let resultsEmpty = document.querySelector('.results-empty');
    let error = document.querySelector('.error');
    let loader = document.querySelector('.loader');
    let url = document.getElementById('url');
    let validate = Client.urlValidator(url.value);

    const routeURL = 'http://localhost:3030/analysis';

    if (validate) {
        loader.style.display = 'block';
        resultsSection.style.display = 'none';
        resultsEmpty.style.display = 'none';

        Client.getNPLAnalysis(routeURL, {url: url.value})
            .then(analysis => {
                if(analysis.status === '200') {
                    url.value = '';
                    loader.style.display = 'none';
                    resultToPage.innerHTML = '';
                    resultsSection.style.display = 'block';
                    analysisResult(analysis, resultToPage, resultsSection);
                } else {
                    error.style.display = 'block';
                    loader.style.display = 'none';
                    resultsEmpty.style.display = 'block';
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
            <div class="polarity-box">
                <div class="polarity">Polarity: <strong>${data.polarity}</strong></div>
                <div class="polarity">
                    Polarity confidence: <strong>${convertToProcent(data.polarity_confidence)}</strong>
                </div>
            </div>
            <div class="subjectivity-box">
                <div class="subjectivity">Subjectivity: <strong>${data.subjectivity}</strong></div>
                <div class="subjectivity">
                    Subjectivity confidence: <strong>${convertToProcent(data.subjectivity_confidence)}</strong>
                </div>
            </div>
        </div>
        <div class="result-text">
            <h2>Analyzed text:</h2>
            <div class="text">${data.text}</div>
        </div>  
    `;
    resultsSection.style.display = 'block';
    resultElement.innerHTML = entryElements;
};

/**
* @description  The function converts the data into a percentage .
* @param {number} num - floating point number.
* @return {string} - returns a string as a percentage.
*/
const convertToProcent = (num) => {
    let result = (num.toFixed(2))*100;
    return `${result}%`;
};

export { handleSubmit };
