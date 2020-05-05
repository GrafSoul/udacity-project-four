# Project Four - Evaluate a News Article with NLP Build.
Training project for [Udacity.com]

### Project Description
The news article evaluator is a tool for checking articles and blogs published on other sites.
This tool will give us back pertinent information about the article, like whether the content 
is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, 
or negative in tone.

### Clone, Install, Development & Start
Install [NodeJS] and run the following commands in consle.
```
// Clone the repository.
git clone https://github.com/GrafSoul/udacity-project-four.git

// Go to the project folder.
cd udacity-project-four

// Installing npm modules.
npm install

// Starting local Webpack Server for development.
npm run dev 

// Creating a set of files for production in the /dist folder.
npm run prod 

// Starting local Server and App.
npm run start 
```

### Project structure
```
├── /src/                                               // Application file folder.
│       ├── /client/                                    // Folder with the client part of the application.
│       │       ├── /js/                                // Folder for JS files.
│       │       │     ├── formHandler.js                // Script for the form.
│       │       │     └── nameChecker.js                // Script to check the name.
│       │       │
│       │       ├── /styles/                            // Folder with styles.
│       │       │     ├── /componets/                   // Folder with parts of styles.
│       │       │     │       ├── _base.scss            // Basic styles.
│       │       │     │       ├── _footer.scss          // Footer styles.
│       │       │     │       ├── _form.scss            // Form styles.
│       │       │     │       ├── _header.scss          // Header styles.
│       │       │     │       └── _resets.scss          // Resets styles.
│       │       │     └── styles.scss                   // The main file of styles.
│       │       │
│       │       ├── /views/                             // Folder for HTML files.
│       │       │     └── index.html                    // HTML file of the app.
│       │       │
│       │       └── index.js                            // Main JS file of the app.
│       │
│       └── /server/                                    // Folder of the server part of the application
│               ├── index.js                            // Express server file.
│               └── mockAPI.js                          // File with dummy data for the API test. 
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
The contents of the repository can be freely used and distributed. 😀

The project is based on the [Udacity repository].  
The project uses [Aylien] API.

[Udacity.com]: https://www.udcity.com/
[Udacity repository]: https://github.com/udacity/fend/tree/refresh-2019
[NodeJS]: https://nodejs.org/
[Aylien]: https://aylien.com/