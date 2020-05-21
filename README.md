# Project Four - Evaluate a News Article with NLP Build.
Training project for [Udacity.com]. Certificate Nanodegree Program - [Front End Web Developer]

<img src="./certificate/certificate.svg" alt="Certificate Udacity" width="600" />

### Project Description
The news article evaluator is a tool for checking articles and blogs published on other sites.
This tool will give us back pertinent information about the article, like whether the content 
is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, 
or negative in tone.

### Demo
Heroku Hosting - [News Analyzer] 

### Clone, Install, Development & Start
Install [NodeJS], then register in the [Aylien] service and get an id and key.    
Clone the repository, create a ```.env``` file and fill it in by inserting your id and key.

```
// Clone the repository.
git clone https://github.com/GrafSoul/udacity-project-four.git

// Go to the project folder.
cd udacity-project-four

// Code for .env file.
API_ID=**************************
API_KEY=**************************
NODE_ENV=development
```

And run the following commands in consle.
```
// Installing npm modules.
npm install

// Starting local Webpack Server for development.
npm run dev 

// Creating a set of files for production in the /dist folder.
npm run prod 

// Starting local Server and App.
npm run start 

// Testing App.
npm run test
```

### Project structure
```
├── /__tests__/                                         // The folder with the files for testing.
│       ├── getNPLAnalysis.spec.js                      // Instructions for testing the getNPLAnalysis function.
│       └── urlValidator.spec.js                        // Instructions for testing the urlValidator function.
│ 
├── /src/                                               // Application file folder.
│       ├── /client/                                    // Folder with the client part of the application.
│       │       ├── /js/                                // Folder for JS files.
│       │       │     ├── formHandler.js                // Script for the form.
│       │       │     └── nameChecker.js                // Script to check the name.
│       │       │
│       │       ├── /styles/                            // Folder with styles.
│       │       │     ├── /componets/                   // Folder with parts of styles.
│       │       │     │       ├── _base.scss            // Basic styles.
│       │       │     │       ├── _config.scss          // Config variables.
│       │       │     │       ├── _footer.scss          // Footer block styles.
│       │       │     │       ├── _form.scss            // Form block styles.
│       │       │     │       ├── _header.scss          // Header block styles.
│       │       │     │       ├── _results.scss         // Results block styles.
│       │       │     │       └── _resets.scss          // Resets styles.
│       │       │     └── styles.scss                   // The main file of styles.
│       │       │
│       │       ├── /views/                             // Folder for HTML files.
│       │       │     └── index.html                    // HTML file of the app.
│       │       │
│       │       └── index.js                            // Main JS file of the app.
│       │
│       └── /server/                                    // Folder of the server part of the application
│               └── index.js                            // Express server file.
│
├── /webpack.config/                                    // Folder with Webpack configuration files.
│       ├── webpack.dev.js                              // Webpack configuration file for development. 
│       └── webpack.prod.js                             // Webpack configuration file for production.  
│
├── .babelrc                                            // Сonfiguration file for Babel.
├── .eslintrc.js                                        // Сonfiguration file for Eslint.
├── .gitignore                                          // File to exclude files and folders.
├── package-lock.json                                   // Npm configuration file.
└── package.json                                        // Npm configuration file.

```

### Copyright
The project is based on the [Udacity repository].  
The project uses [Aylien Text Analysis API].

### License
© 2020 Evaluate a News Article with NLP Build is [MIT licensed].

[Udacity.com]: https://www.udcity.com/
[Udacity repository]: https://github.com/udacity/fend/tree/refresh-2019
[NodeJS]: https://nodejs.org/
[Aylien Text Analysis API]: https://aylien.com/text-api/
[News Analyzer]: https://newsnlpanalysis.herokuapp.com/ 
[MIT licensed]: https://github.com/GrafSoul/udacity-project-four/blob/master/LICENSE.txt

[Front End Web Developer]: https://confirm.udacity.com/7QM9HD6