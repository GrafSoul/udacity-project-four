/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { getNPLAnalysis } from '../src/client/js/getNPLAnalysis';

// Testing with the correct local server address and news url
test('The correct local server address and news url', () => {
    const route = 'http://localhost:3030/analysis';
    const url = 'https://www.bbc.com/news/world-us-canada-52553829';
    
    getNPLAnalysis(route, {url})
        .then(analysis => {
            expect(analysis.status).toBe('200');
        }).catch(error => {});
});

// Testing with the wrong local server address and news url
test('The wrong local server address and news url', () => {
    const route = '';
    const url = 'https://www.bbc.com/news/world-us-canada-52553829';
    
    getNPLAnalysis(route, {url})
        .then(analysis => {
            expect(analysis.status).toBe('404');
        }).catch(error => {});
});

// Testing with the correct local server address and wrong news url
test('The correct local server address and wrong news url', () => {
    const route = 'http://localhost:3030/analysis';
    const url = 'https://www.bbc.com/news/index.html';
    getNPLAnalysis(route, {url})
        .then(analysis => {
            expect(analysis.status).toBe('404');
        }).catch(error => {});
});

// Testing with the correct local server address and invalid news url
test('The correct local server address and invalid news url', () => {
    const route = 'http://localhost:3030/analysis';
    const url = 'bbcnewscom';
    getNPLAnalysis(route, {url})
        .then(analysis => {
            expect(analysis.status).toBe('Invalid getting data');
        }).catch(error => {});
});

// Testing with the correct local server address and empty news url
test('The correct local server address and empty news url', () => {
    const route = 'http://localhost:3030/analysis';
    const url = '';
    getNPLAnalysis(route, {url})
        .then(analysis => {
            expect(analysis.status).toBe('Invalid getting data');
        }).catch(error => {});
});