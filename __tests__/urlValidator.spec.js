/* eslint-disable no-undef */
import { urlValidator } from '../src/client/js/urlValidator';

// Testing when the url string contains 'https' but doesn't contain 'www'.
test('Url contains - https but doesn\'t contain www.', () => {
    let url = 'https://bbc.com';
    expect(urlValidator(url)).toBe(true);
});

// Testing when the url string contains 'http' but doesn't contain 'www'.
test('Url contains - http but doesn\'t contain www.', () => {
    let url = 'http://bbc.com';
    expect(urlValidator(url)).toBe(true);
});

// Testing when the url string contains 'https' and 'www'.
test('Url contains - https and www', () => {
    let url = 'https://www.bbc.com';
    expect(urlValidator(url)).toBe(true);
});

// Testing when the url string contains 'http' and 'www'.
test('Url contains - http and www', () => {
    let url = 'http://www.bbc.com';
    expect(urlValidator(url)).toBe(true);
});

// Testing when the url string doesn't contain 'http', 'http' and 'www'.
test('Url doesn\'t contain - http, https and www', () => {
    let url = 'bbc.com';
    expect(urlValidator(url)).toBe(true);
});

// Testing when the url string contains only a word.
test('Url contain - only a word', () => {
    let url = 'bbcnews';
    expect(urlValidator(url)).toBe(false);
});

// Testing when the url string contains an empty string.
test('Url contain - an empty string', () => {
    let url = '';
    expect(urlValidator(url)).toBe(false);
});